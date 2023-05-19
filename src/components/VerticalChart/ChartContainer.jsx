import React from 'react';
import Chart from './Chart';
import ChartFilter from './ChartFilter';
import useLocalStorage from '../../hooks/useLocalStorage';
import '../../styles/index.css';

export default function ChartContainer() {
  const [productFilter, setProductFilter] = useLocalStorage('productFilter', '');
  return (
    <div className="chart-container">
      <ChartFilter productFilter={productFilter} setProductFilter={setProductFilter} />
      <Chart productFilter={productFilter} />
    </div>
  );
}
