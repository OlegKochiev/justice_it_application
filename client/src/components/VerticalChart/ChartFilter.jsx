import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';

import '../../styles/index.css';

export default function ChartFilter({productFilter, setProductFilter}) {
  const {productsList} = useContext(GlobalContext);

  const handleChange = (e) => {
    setProductFilter(e.target.value);
  };

  return (
    <label className="chart-filter__label">
      Фильтр по типу продукции:
      <select name="Фильтр" onChange={handleChange} value={productFilter}>
        <option key="all" value="" label="Все">
          Все
        </option>
        {productsList.map((product) => (
          <option key={product.id} value={product.id} label={product.title}>
            {product.title}
          </option>
        ))}
      </select>
    </label>
  );
}
