
import React from 'react';
import LineChart from '../components/LineChart';
import PieChart from '@/components/PieChart';
import StackedBarChart from '@/components/StackBarChart';

export default function Welcome() {
  // Example default data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgb(235, 244, 244)',
        borderColor: 'rgb(95, 179, 130)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart Example' },
    },
  };

  return (
    <div style={{ padding: '2rem' }}>
       
      <h1>My very first data visualization</h1>

      <div style={{ margin: '2rem 0' }}>
        <LineChart />
        <PieChart/>
        <StackedBarChart/>
      </div>

      
    </div>
  );
}