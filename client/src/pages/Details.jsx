import React, {useContext} from 'react';
import Chart from '../components/PieChart/Chart';
import {GlobalContext} from '../context/GlobalContext';

export default function Details() {
  const data = useContext(GlobalContext);
  return data.length ? <Chart /> : 'Идет загрузка данных...';
}
