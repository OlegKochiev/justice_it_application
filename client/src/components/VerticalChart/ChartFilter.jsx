import React from 'react';
import {PRODUCT_FILTER_OPTIONS} from '../../constants';
import '../../styles/index.css';

export default function ChartFilter({setProductFilter}) {
  const handleChange = (e) => {
    setProductFilter(e.target.value);
  };

  return (
    <label className="chart-filter__label">
      Фильтр по типу продукции:
      <select name="Фильтр" onChange={handleChange}>
        {PRODUCT_FILTER_OPTIONS.map((filter) => (
          <option key={filter.name} value={filter.value} label={filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </label>
  );
}
