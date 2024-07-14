import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NotificationBell = () => {
    const currentUser = useCurrentUser();
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
            try {
                const response = await axios.get('mynotifications/');
                
                const data = response.data.results;
                if (Array.isArray(data)) {
                    console.log(data);
                    setNotifications(data);
                    setUnreadCount(data.filter(n => !n.is_read).length);
                } else {
                console.error('Expected an array but got:', data);
                setNotifications([]);
                }
            } catch (error) {
                //console.error('Error fetching notifications:', error);
            }
        
        };
    var intvalNot;
    if (currentUser){
        intvalNot=setInterval(() => {
            fetchNotifications();
        
        }, 20000);
    }else{
        if(intvalNot){
            clearInterval(intvalNot);
            intvalNot=undefined;
        }
    }
    const markAsRead = async (id) => {
        try {
            axios.patch(`mynotifications/${id}/`, { is_read: true });
            fetchNotifications();
        } catch (error) {
            console.error('Error marking notification as read:', error); 
        }
    };

    const history = useHistory();

    const handleItemClick = (notificationId, post) => {
        console.log(post);
        markAsRead(notificationId);
        history.push(`/posts/${post}`);
    };
    const truncateMessage = (message, maxLength) => {
        if (message.length > maxLength) {
            return message.substring(0, maxLength) + '...';
        }
        return message;
    };
    return (
        <Dropdown
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            show={show}
        >
            <Dropdown.Toggle variant="default" id="dropdown-basic">
                <i className="fas fa-bell">{unreadCount > 0 && `${unreadCount}`}</i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className='text-dark'><h3>Notifications{unreadCount > 0 && `(${unreadCount})`}</h3><hr/></div>

                {Array.isArray(notifications) && notifications.length > 0 ? (
                    notifications.some(notification => !notification.is_read) ? (
                        notifications.map(notification => (
                            !notification.is_read ? (
                                <Dropdown.Item
                                    key={notification.id}
                                    onClick={() => handleItemClick(notification.id, notification.post)}
                                    className=' bg-primary text-light'
                                >
                                    <div className="d-flex container flex-row">
                                        <div className={!notification.is_read ? 'row font-weight-bold' : 'row'}>
                                            <p className='text-wrap col-12'>{truncateMessage(notification.message, 50)}</p>
                                        </div>
                                        <hr/>
                                        <div className="row p-3">
                                            <div className="col-2">{notification.username}</div>
                                            <div className="col-2">{new Date(notification.timestamp).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <br/>
                                </Dropdown.Item>
                            ) : null
                        ))
                    ) : (
                        <Dropdown.Item>No new notifications</Dropdown.Item>
                    )
                ) : (
                    <Dropdown.Item>No notifications</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationBell;
