import React, {useState} from 'react';
import Chart from './Chart';
import ChartFilter from './ChartFilter';

import '../../styles/index.css';

export default function ChartContainer({data}) {
  const [productFilter, setProductFilter] = useState('all'); // todo: получать значение выбранного фильтра из localStorage

  return (
    <div className="chart-container">
      <ChartFilter productFilter={productFilter} setProductFilter={setProductFilter} />
      <Chart data={data} />
    </div>
  );
}
