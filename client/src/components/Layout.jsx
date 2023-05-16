import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import {URL} from '../constants';

export default function Layout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL.PRODUCTS)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
