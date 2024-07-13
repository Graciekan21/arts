import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('mynotifications/');
            
            const data = response.data.results;
            if (Array.isArray(data)) {
                //console.log(data);
                setNotifications(data);
                setUnreadCount(data.filter(n => !n.is_read).length);
            } else {
              console.error('Expected an array but got:', data);
              setNotifications([]);
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };
    setInterval(() => {
        fetchNotifications();
    }, 20000);

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

    return (
        <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
            <i className="fas fa-bell"></i>Notifications {unreadCount > 0 && `(${unreadCount})`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {Array.isArray(notifications) && notifications.length > 0 ? (
                    notifications.some(notification => !notification.is_read) ? (
                    notifications.map(notification => (
                        !notification.is_read ? (
                            <Dropdown.Item
                                key={notification.id}
                                onClick={() => handleItemClick(notification.id, notification.post)}
                                className='font-weight-bold'
                            >
                                {notification.message}
                            </Dropdown.Item>
                        ) : (
                        null // Optionally render something else or nothing for read notifications
                        )
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
