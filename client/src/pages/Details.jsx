import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {URL} from '../constants';
import Chart from '../components/PieChart/Chart';

export default function Details() {
  const {factoryId, mounthNumber} = useParams();

  return (
    <div>
      <Chart />
    </div>
  );
}
