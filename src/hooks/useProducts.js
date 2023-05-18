import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const useProducts = ({factoryId, monthNumber, productFilter}) => {
  const {factoriesList, factoriesProduction} = useContext(GlobalContext);
  const factoryProduction = factoriesProduction[factoryId] || [];
  const factoryProductionForMonth = factoryProduction[monthNumber] || [];
  const factoriesProductionFiltered = {};
  if (factoriesList) {
    for (let key in factoriesProduction) {
      factoriesProductionFiltered[key] = factoriesProduction[key].map((month) => {
        if (productFilter) return month[productFilter];
        let total = 0;
        for (let product in month) {
          total += month[product];
        }
        return total;
      });
    }
  }
  return {factoryProductionForMonth, factoriesProductionFiltered};
};

export default useProducts;
