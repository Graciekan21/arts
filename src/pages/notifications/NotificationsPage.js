import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function NotificationsPage({ message, filter = "" }) {

    const currentUser = useCurrentUser();
    const [notifications, setNotifications] = useState([]);
    const [isNotificationOn, setIsNotificationOn] = useState(true);
    const [unreadCount, setUnreadCount] = useState(0);
    const history = useHistory();
    const is_logged = Boolean(currentUser?.username);

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
        fetchNotificationStatus();
        let intervalId;
        if (currentUser) {
            fetchNotifications();
            intervalId = setInterval(fetchNotifications, 10000);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
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

    const handleNotificationDelete = async (id) => {
        try {
            const delConf=confirm("Are you sure you want to delete this Notification?");
            if(delConf){
                await axios.delete(`notifications/delete/${id}/`);
                fetchNotifications();
            }
        } catch (error) {
            console.error('Error deleting notification:', error); 
        }
    };

    const handleItemClick = (notificationId, post) => {
        markAsRead(notificationId);
        history.push(`/posts/${post}`);
    };

    const handleNotificationToggle = async () => {
        try {
            const response = await axios.post(`profiles/togglenotifications/`);
            setIsNotificationOn(response.data.notifications_on);
        } catch (error) {
            console.error('Error toggling notifications:', error);
        }
    };

    const truncateMessage = (message, maxLength) => {
        return message.length > maxLength ? message.substring(0, maxLength) + '...' : message;
    };
    const fetchNotificationStatus = async () => {
        try {
            const response = await axios.get('/profiles/current/');
            setIsNotificationOn(response.data.notifications_on);
        } catch (error) {
            console.error('Error fetching notification status:', error);
        }
    };
    
    return (
        is_logged ? (
            <div className="container mt-4">
                <Row className="mb-3 align-items-center">
                    <Col>
                        <h3>Notifications {unreadCount > 0 && `(${unreadCount})`}</h3>
                    </Col>
                    <Col className="text-right">
                        <Button 
                            variant={isNotificationOn ? 'success' : 'secondary'}
                            size="sm"
                            onClick={handleNotificationToggle}
                        >
                            {isNotificationOn ? 'Notifications ON' : 'Notifications OFF'}
                        </Button>
                    </Col>
                </Row>

                <h4 className="mt-4"><b>Unread Notifications</b></h4>
                <hr />
                {notifications.filter(n => !n.is_read).length > 0 ? (
                    notifications.filter(n => !n.is_read).map(notification => (
                        <Card className="mb-3 shadow-sm" key={notification.id}>
                            <Card.Body className="bg-primary text-white rounded">
                                <Card.Title>{truncateMessage(notification.message, 50)}</Card.Title>
                                <Card.Text>
                                    <small>By: {notification.username}</small><br />
                                    <small>{new Date(notification.timestamp).toLocaleString()}</small>
                                </Card.Text>
                                <Button 
                                    variant="light" 
                                    size="sm"
                                    className="mr-2"
                                    onClick={() => handleItemClick(notification.id, notification.post)}
                                >
                                    View Post
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick={() => handleNotificationDelete(notification.id)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No unread notifications.</p>
                )}

                <h4 className="mt-4"><b>Read Notifications</b></h4>
                <hr />
                {notifications.filter(n => n.is_read).length > 0 ? (
                    notifications.filter(n => n.is_read).map(notification => (
                        <Card className="mb-3 shadow-sm" key={notification.id}>
                            <Card.Body className="bg-light text-dark rounded">
                                <Card.Title>{truncateMessage(notification.message, 50)}</Card.Title>
                                <Card.Text>
                                    <small>By: {notification.username}</small><br />
                                    <small>{new Date(notification.timestamp).toLocaleString()}</small>
                                </Card.Text>
                                <Button 
                                    variant="dark" 
                                    size="sm"
                                    className="mr-2"
                                    onClick={() => handleItemClick(notification.id, notification.post)}
                                >
                                    View Post
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick={() => handleNotificationDelete(notification.id)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No read notifications.</p>
                )}
            </div>
        ) : (
            <div className="container text-center mt-4">
                <h4>Please log in to view notifications</h4>
            </div>
        )
    );
}

export default NotificationsPage;
