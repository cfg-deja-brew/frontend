import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "@lyket/react";
import Home from './pages/Home';
import CafeSearch from './pages/CafeSearch';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup'
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Verify from './pages/Verify';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider apiKey="pt_6c8d751a2c1d4fd85ce3ab63caccdf">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cafe-search/leicester" element={<CafeSearch cityIndex={0} />} />
          <Route path="/cafe-search/nottingham" element={<CafeSearch cityIndex={1} />} />
          <Route path="/cafe-search/derby" element={<CafeSearch cityIndex={2} />} />
          <Route path="/verification" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)