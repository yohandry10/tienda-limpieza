// src/components/Notifications.js
import React, { useEffect, useState } from 'react';
import socket from '../services/socket';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (data) => {
      setNotifications(prevNotifications => [...prevNotifications, data]);
    });

    return () => socket.off('notification');
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
