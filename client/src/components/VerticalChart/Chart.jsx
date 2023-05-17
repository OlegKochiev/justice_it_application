import React, {useContext, useRef} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar, getElementAtEvent} from 'react-chartjs-2';
import {useNavigate} from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import {GlobalContext} from '../../context/GlobalContext';
import {MONTHS} from '../../constants';
import '../../styles/index.css';

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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export default function Chart({productFilter}) {
  const datasets = [];
  const {factoriesProductionFiltered} = useProducts({productFilter});
  const chartRef = useRef(null);
  const navigate = useNavigate();
  const {factoriesList} = useContext(GlobalContext);
  for (let key in factoriesProductionFiltered) {
    const datasetItem = {};
    const factory = factoriesList.find((factory) => factory.id === +key);
    datasetItem.label = factory?.title;
    datasetItem.data = [...factoriesProductionFiltered[key]];
    datasetItem.backgroundColor = BACKGROUND_RGB[datasets.length];
    datasets.push(datasetItem);
  }

  const handleChartClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const bar = getElementAtEvent(chartRef.current, event)[0];
      const monthNumber = bar?.index;
      const factoryId = bar?.datasetIndex + 1;
      navigate(`/details/${factoryId}/${monthNumber}`);
    }
  };

  const data = {
    labels: MONTHS,
    datasets: [...datasets],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} ref={chartRef} onClick={handleChartClick} />
    </div>
  );
}
