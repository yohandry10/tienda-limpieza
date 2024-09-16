// src/components/DeviceStatus.js
import React, { useEffect, useState } from 'react';
import socket from '../services/socket';

const DeviceStatus = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    socket.on('deviceStatusUpdate', (data) => {
      setDevices(data.devices);
    });

    return () => socket.off('deviceStatusUpdate');
  }, []);

  return (
    <div>
      <h2>Device Status</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} - {device.ip} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceStatus;
