import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Page404 from './pages/Page404';
import './styles/index.css';
import {PATHS} from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATHS.DETAILS} element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
