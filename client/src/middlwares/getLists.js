import {getRGB} from '../utils';

export default function getLists(data) {
  const factoriesList = {};
  const productsList = {};
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const factoryId = item.factory_id;
      if (!factoriesList[factoryId]) {
        factoriesList[factoryId] = {id: factoryId, title: `Фабрика ${factoryId}`, backgroundColor: getRGB()};
      }
      for (let key in item) {
        if (key.includes('product') && !productsList[key]) {
          const productId = key.replace(/[^+\d]/g, '');
          productsList[key] = {
            id: key,
            title: `Продукт ${productId}`,
            backgroundColor: getRGB(0.3),
            borderColor: getRGB(1),
          };
        }
      }
    }
  }
  return {factoriesList: Object.values(factoriesList), productsList: Object.values(productsList)};
}
