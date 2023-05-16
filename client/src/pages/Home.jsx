import React, {useContext} from 'react';
import ChartContainer from '../components/VerticalChart/ChartContainer';
import {GlobalContext} from '../context/GlobalContext';

export default function Home() {
  const data = useContext(GlobalContext);
  return data.length ? <ChartContainer /> : 'Идет загрузка данных..';
}
