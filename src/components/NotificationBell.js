import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';


const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('/api/notifications/');
            setNotifications(response.data);
            setUnreadCount(response.data.filter(n => !n.is_read).length);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const markAsRead = async (id) => {
        try {
            await axios.patch(`/api/notifications/${id}/`, { is_read: true });
            fetchNotifications();
        } catch (error) {
            console.error('Error marking notification as read:', error); 
        }
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Notifications {unreadCount > 0 && `(${unreadCount})`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {notifications.map(notification => (
                    <Dropdown.Item
                        key={notification.id}
                        onClick={() => markAsRead(notification.id)}
                        className={!notification.is_read ? 'font-weight-bold' : ''}
                    >
                        {notification.message}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationBell;
