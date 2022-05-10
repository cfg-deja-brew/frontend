import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CoffeeShopSearch from './pages/CoffeeShopSearch';
import Navbar from './components/Navbar';
import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      {/* <img className="logo" src={logo} alt="logo"/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee-shop-search/leicester" element={<CoffeeShopSearch cityIndex={0} />} />
        <Route path="/coffee-shop-search/nottingham" element={<CoffeeShopSearch cityIndex={1} />} />
        <Route path="/coffee-shop-search/derby" element={<CoffeeShopSearch cityIndex={2} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
