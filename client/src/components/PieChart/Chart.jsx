import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Статистика по продукции',
    },
    labels: {
      render: 'value',
      position: 'outside',
    },
  },
};
export const data = {
  labels: ['Продукт 1', 'Продукт 2'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}
