import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import useProducts from '../../hooks/useProducts';
import {useParams} from 'react-router-dom';

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

export default function Chart() {
  const {products, factorys} = useProducts();
  const {factoryId, mounthNumber} = useParams();
  const productsValues = factorys[factoryId][mounthNumber];

  const data = {
    labels: [...products.map((product) => product.title)],
    datasets: [
      {
        data: [...products.map((product) => productsValues[product.id])],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(154, 62, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(55, 199, 32, 0.2)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}
