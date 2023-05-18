import React, {useContext} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import useProducts from '../../hooks/useProducts';
import {useParams} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalContext';
import {MONTHS} from '../../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const {factoriesList, productsList} = useContext(GlobalContext);
  const {factoryId, monthNumber} = useParams();
  const {factoryProductionForMonth} = useProducts({factoryId, monthNumber});
  const isValidUrlParams = MONTHS[monthNumber] && factoriesList.find((factory) => factory.id === +factoryId);
  const data = {
    labels: [...productsList.map((product) => product.title)],
    datasets: [
      {
        data: [...productsList.map((product) => factoryProductionForMonth[product.id])],
        backgroundColor: [...productsList.map((product) => product.backgroundColor)],
        borderColor: [...productsList.map((product) => product.borderColor)],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: `Статистика по продукции фабрики ${factoryId} за ${MONTHS[monthNumber]?.toLowerCase()}`,
      },
      labels: {
        render: 'value',
        position: 'outside',
      },
    },
  };

  return <div> {isValidUrlParams ? <Pie data={data} options={options} /> : 'Ошибка переданных параметров'}</div>;
}
