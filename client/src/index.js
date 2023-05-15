import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import Page404 from './pages/Page404';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:factoryId/:mounthNumber" element={<Details />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
