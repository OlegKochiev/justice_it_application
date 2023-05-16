import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const useProducts = (filter = 'all') => {
  const data = useContext(GlobalContext);
  const monthly = [];
  let products = {};
  const factorys = {};
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.date === null) continue;
      const dateFormatted = item.date.split('/').reverse().join('/');
      const month = new Date(dateFormatted).getMonth();
      const factoryId = item.factory_id;
      if (!factorys[factoryId]) factorys[factoryId] = [];
      if (!monthly[month]) monthly[month] = {};
      if (!monthly[month][factoryId]) monthly[month][factoryId] = [];
      monthly[month][factoryId].push(item);
      for (let key in item) {
        if (key.includes('product') && !products[key]) {
          const productId = key.replace(/[^+\d]/g, '');
          products[key] = {
            id: key,
            title: `Продукт ${productId}`,
          };
        }
      }
    }
  }
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.date === null || item.factory_id === null) continue;
      const dateFormatted = item.date.split('/').reverse().join('/');
      const factoryId = item.factory_id;
      const monthNumber = new Date(dateFormatted).getMonth();
      if (!factorys[factoryId]) factorys[factoryId] = [];
      if (!factorys[factoryId][monthNumber]) factorys[factoryId][monthNumber] = {};
      for (let key in item) {
        if (key.includes('product') && !products[key]) {
          const productId = key.replace(/[^+\d]/g, '');
          products[key] = {
            id: key,
            title: `Продукт ${productId}`,
          };
        }
        if (key.includes('product')) {
          if (!factorys[factoryId][monthNumber][key]) factorys[factoryId][monthNumber][key] = 0;
          factorys[factoryId][monthNumber][key] += +item[key];
        }
      }
    }
  }
  products = Object.values(products);
  return {products, factorys};
};

export default useProducts;
