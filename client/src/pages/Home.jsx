import React, {useContext} from 'react';
import ChartContainer from '../components/VerticalChart/ChartContainer';
import {GlobalContext} from '../context/GlobalContext';

export default function Home() {
  const {factoriesList} = useContext(GlobalContext);
  return factoriesList?.length ? <ChartContainer /> : 'Идет загрузка данных..';
}
