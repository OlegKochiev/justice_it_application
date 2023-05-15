import React, {useState} from 'react';
import Chart from './Chart';
import ChartFilter from './ChartFilter';
import {PRODUCT_FILTER_OPTIONS} from '../../constants';

import '../../styles/index.css';

export default function ChartContainer({data}) {
  const [productFilter, setProductFilter] = useState(PRODUCT_FILTER_OPTIONS[0].value);

  return (
    <div className="chart-container">
      <ChartFilter setProductFilter={setProductFilter} />
      <Chart data={data} />
    </div>
  );
}
