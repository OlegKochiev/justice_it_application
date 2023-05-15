import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const request = fetch('http://localhost:3001/products');
    request
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

  return (
    <div>
      {isLoading ? (
        'Идет загрузка данных...'
      ) : (
        <div>
          Factory: {factoryId}
          Mounth number: {mounthNumber}
        </div>
      )}
    </div>
  );
}
