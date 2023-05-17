import React, {useContext} from 'react';
import Chart from '../components/PieChart/Chart';
import {GlobalContext} from '../context/GlobalContext';

export default function Details() {
  const {factoriesList} = useContext(GlobalContext);
  return factoriesList?.length ? <Chart /> : 'Идет загрузка данных...';
}
