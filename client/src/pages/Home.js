import React, {useEffect, useState} from 'react';
import ChartContainer from '../components/VerticalChart/ChartContainer';
import {URL} from '../constants';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
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

  return <div>{isLoading ? 'Загрузка данных..' : <ChartContainer data={data} />}</div>;
}
