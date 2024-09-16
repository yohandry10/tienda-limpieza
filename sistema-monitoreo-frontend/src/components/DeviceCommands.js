// src/components/DeviceCommands.js
import React from 'react';
import socket from '../services/socket';

const DeviceCommands = ({ deviceId }) => {
  const rebootDevice = () => {
    socket.emit('rebootDevice', { id: deviceId });
  };

  return (
    <button onClick={rebootDevice}>
      Reboot Device
    </button>
  );
};

export default DeviceCommands;
