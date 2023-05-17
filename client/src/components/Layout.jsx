import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import {URL} from '../constants';
import getLists from '../middlwares/getLists';
import getProductionMonthly from '../middlwares/getProductionMonthly';

export default function Layout() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(URL.PRODUCTS)
      .then((response) => response.json())
      .then((data) => {
        const {factoriesList, productsList} = getLists(data);
        const factoriesProduction = getProductionMonthly(data);
        setData({
          factoriesList,
          productsList,
          factoriesProduction,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <GlobalContext.Provider value={data}>
        <main>
          <Outlet />
        </main>
      </GlobalContext.Provider>
    </>
  );
}
