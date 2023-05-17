import React, {useContext, useRef} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar, getElementAtEvent} from 'react-chartjs-2';
import {useNavigate} from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import {GlobalContext} from '../../context/GlobalContext';
import {MONTHS} from '../../constants';
import '../../styles/index.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const getDatasets = ({factoriesList, factoriesProductionFiltered}) => {
  const datasets = [];
  for (let key in factoriesProductionFiltered) {
    const dataset = {};
    const factory = factoriesList.find((factory) => factory.id === +key);
    dataset.label = factory?.title;
    dataset.data = [...factoriesProductionFiltered[key]];
    dataset.backgroundColor = factory.backgroundColor;
    datasets.push(dataset);
  }
  return datasets;
};

export default function Chart({productFilter}) {
  const {factoriesList} = useContext(GlobalContext);
  const {factoriesProductionFiltered} = useProducts({productFilter});
  const chartRef = useRef(null);
  const navigate = useNavigate();
  const datasets = getDatasets({factoriesList, factoriesProductionFiltered});

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
