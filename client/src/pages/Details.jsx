import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {URL} from '../constants';
import Chart from '../components/PieChart/Chart';

export default function Details() {
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

  const {factoryId, mounthNumber} = useParams();

  return <div>{isLoading ? 'Идет загрузка данных...' : <Chart />}</div>;
}
