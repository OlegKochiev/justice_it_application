import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';

import '../../styles/index.css';

export default function ChartFilter({productFilter, setProductFilter}) {
  const {productsList} = useContext(GlobalContext);

  const handleChange = (e) => {
    setProductFilter(e.target.value);
  };

  return (
    <div className="chart-filter__container">
      <label>Фильтр по типу продукции:</label>
      <select onChange={handleChange} value={productFilter}>
        <option key="all" value="">
          Все
        </option>
        {productsList.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
    </div>
  );
}
