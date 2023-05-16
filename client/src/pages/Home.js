import React, {useEffect, useState} from 'react';
import ChartContainer from '../components/VerticalChart/ChartContainer';
import {URL} from '../constants';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const factorys = {};
  const monthly = [];

  useEffect(() => {
    fetch(URL.PRODUCTS)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.date === null) continue;
        const dateFormatted = item.date.split('/').reverse().join('/');
        const month = new Date(dateFormatted).getMonth();
        const factoryId = item.factory_id;
        if (!monthly[month]) monthly[month] = {};
        if (!monthly[month][factoryId]) monthly[month][factoryId] = {};
        if (!monthly[month][factoryId]['product1']) monthly[month][factoryId]['product1'] = 0;
        if (!monthly[month][factoryId]['product2']) monthly[month][factoryId]['product2'] = 0;
        monthly[month][factoryId]['product1'] += +item['product1'];
        monthly[month][factoryId]['product2'] += +item['product2'];
      }
    }
  }, [data]);

  return isLoading ? 'Загрузка данных..' : <ChartContainer data={data} />;
}
