import React, {useContext} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import useProducts from '../../hooks/useProducts';
import {useParams} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalContext';

const BACKGROUND_RGB = [
  'rgba(248, 28, 35, 0.7)',
  'rgba(33, 55, 247, 0.7)',
  'rgba(64, 224, 8, 0.7)',
  'rgba(173, 216, 230, 0.7)',
  'rgba(169, 169, 169, 0.7)',
  'rgba(100, 149, 237, 0.7)',
  'rgba(60, 179, 113, 0.7)',
  'rgba(70, 130, 180, 0.7)',
  'rgba(25, 25, 112, 0.7)',
];

const BORDER_RGB = [
  'rgba(173, 255, 47, 1)',
  'rgba(60, 179, 113, 1)',
  'rgba(169, 169, 169, 1)',
  'rgba(25, 25, 112, 1)',
  'rgba(173, 216, 230, 1)',
  'rgba(64, 224, 208, 1)',
  'rgba(70, 130, 180, 1)',
  'rgba(100, 149, 237, 1)',
  'rgba(248, 248, 255, 1)',
];

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
  const {factoryId, mounthNumber} = useParams();
  const {productsList} = useContext(GlobalContext);
  const {factoryProductionForMonth} = useProducts({factoryId, mounthNumber});

  const data = {
    labels: [...productsList.map((product) => product.title)],
    datasets: [
      {
        data: [...productsList.map((product) => factoryProductionForMonth[product.id])],
        backgroundColor: [...BACKGROUND_RGB.splice(0, productsList.length)],
        borderColor: [...BORDER_RGB.slice(0, productsList.length)],
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
