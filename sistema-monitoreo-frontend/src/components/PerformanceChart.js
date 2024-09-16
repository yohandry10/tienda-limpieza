// src/components/PerformanceChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: 'CPU Usage',
        data: data.cpuUsage,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PerformanceChart;
