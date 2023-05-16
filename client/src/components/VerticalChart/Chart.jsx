import React, {useRef} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar, getElementAtEvent} from 'react-chartjs-2';
import {CHART_LABELS} from '../../constants';
import '../../styles/index.css';
import {useNavigate} from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export const data = {
  labels: CHART_LABELS,
  datasets: [
    {
      label: 'Фабрика 1',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Фабрика 2',
      data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chart() {
  const chartRef = useRef(null);
  const navigate = useNavigate();

  const handleChartClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const bar = getElementAtEvent(chartRef.current, event)[0];
      const monthNumber = bar.index;
      const factoryId = bar.datasetIndex;
      navigate(`/details/${factoryId}/${monthNumber}`);
    }
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} ref={chartRef} onClick={handleChartClick} />
    </div>
  );
}
