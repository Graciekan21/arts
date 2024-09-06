import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import axios from 'axios';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const NotificationsPage=()=> {

    const currentUser = useCurrentUser();
    const [notifications, setNotifications] = useState([]);
    const [isNotificationOn, setIsNotificationOn] = useState(true);
    const [unreadCount, setUnreadCount] = useState(0);
    const [show, setShow] = useState(false);
    const history = useHistory();

    
    const fetchNotifications = async () => {
        try {
            const response = await axios.get('mynotifications/');
            const data = response.data.results;
            if (Array.isArray(data)) {
                setNotifications(data);
                setUnreadCount(data.filter(n => !n.is_read).length);
            } else {
                console.error('Expected an array but got:', data);
                setNotifications([]);
            }
        } catch (error) {
            // Handle error silently
        }
    };

    useEffect(() => {
        let isMounted = true; // flag to track if component is mounted
        let intervalId;
        fetchNotificationStatus();
        if (currentUser) {
            fetchNotifications();
            intervalId = setInterval(fetchNotifications, 10000);
        }

        return () => {
            isMounted = false; // mark as unmounted
            if (intervalId) {
                clearInterval(intervalId); // clear the interval
            }
        };
    }, [currentUser]);

    const markAsRead = async (id) => {
        try {
            await axios.patch(`mynotifications/${id}/`, { is_read: true });
            fetchNotifications();
        } catch (error) {
            console.error('Error marking notification as read:', error); 
        }
    };
    const handleNotificationDelete = async (id)=>{
        try {
            const response=await axios.delete(`notifications/delete/${id}/`);
            console.log(response);
            fetchNotifications();
        } catch (error) {
            console.error('Error deleting notification:', error); 
        }
    }
    const handleItemClick = (notificationId, post) => {
        markAsRead(notificationId);
        history.push(`/posts/${post}`);
    };
    const fetchNotificationStatus = async () => {
        try {
            const response = await axios.get('/profiles/current/');
            setIsNotificationOn(response.data.notifications_on);
        } catch (error) {
            console.error('Error fetching notification status:', error);
        }
    };
    const handleNotificationToggle= async ()=>{
        try{ 
            const response = await axios.post(`profiles/togglenotifications/`);
            setIsNotificationOn(response.data.notifications_on);
        }catch(error){
            console.error('Error Toggling Notifications:',error);
        }
    };

    const truncateMessage = (message, maxLength) => {
        if (message.length > maxLength) {
            return message.substring(0, maxLength) + '...';
        }
        return message;
    };

    return ( <div>
                <div className="text-dark">
                    <h3>Notifications{unreadCount > 0 && `(${unreadCount})`}</h3>
                    <Button className='bg-light text-dark btn btn-sm '
                        onClick={handleNotificationToggle}
                        >View All</Button>
                    <hr/>
                    <div>
                        <Button className='bg-light text-dark btn btn-sm '
                        onClick={handleNotificationToggle}
                        >{isNotificationOn ? 'Notifications ON' : 'Notifications OFF'}</Button>
                    </div>
                </div>
                <div>
                {Array.isArray(notifications) && notifications.length > 0 ? (
                    notifications.some(notification => !notification.is_read) ? (
                        notifications.map(notification => (
                            !notification.is_read ? (
                                <div
                                key={notification.id}
                                    className='bg-primary text-light'
                                >
                                    <div>
                                    <Button className='bg-light text-dark' key={notification.id}
                                    onClick={() => handleItemClick(notification.id, notification.post)}>
                                        
                                    <div className="d-flex container flex-row">
                                        <div className={!notification.is_read ? 'row font-weight-bold' : 'row'}>
                                            <p className='text-wrap col-12'>{truncateMessage(notification.message, 50)}</p>
                                        </div>
                                        <hr/>
                                        <div className="row p-1"><p className='text-wrap col-12'>{notification.username}</p></div>
                                        <div className="row p-1"><p className='text-wrap col-12'>{new Date(notification.timestamp).toLocaleString()}</p></div>
                                        
                                    </div>
                                    <br/>
                                    </Button>
                                    </div>
                                    <div>
                                    <Button className='bg-light text-danger btn btn-sm'
                                    onClick={() => handleNotificationDelete(notification.id)}
                        >Delete<span className="fas fa fa-trash text-danger"></span></Button>
                        </div>
                                </div>
                            ) : null
                        ))
                    ) : (
                        <Dropdown.Item>No new notifications</Dropdown.Item>
                    )
                ) : (
                    <div>No notifications</div>
                )}
                </div>
                </div>
              )
};

export default NotificationsPage;