import React from 'react';
import useProducts from '../../hooks/useProducts';

import '../../styles/index.css';

export default function ChartFilter({productFilter, setProductFilter}) {
  const {products} = useProducts();

  const handleChange = (e) => {
    setProductFilter(e.target.value);
  };

  return (
    <label className="chart-filter__label">
      Фильтр по типу продукции:
      <select name="Фильтр" onChange={handleChange}>
        <option key="all" value="all" label="Все">
          Все
        </option>
        {products.map((product) => (
          <option key={product.id} value={product.id} label={product.title}>
            {product.title}
          </option>
        ))}
      </select>
    </label>
  );
}
