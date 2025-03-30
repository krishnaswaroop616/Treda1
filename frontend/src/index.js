import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/SignUp";
import Pricing from './landing_page/pricing/PricingPage';
import Support from "./landing_page/support/Support";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer/Footer';
import NotFound from './landing_page/NotFound';
import Dashboard from './dashboard/Dashboard';

import Summary from './dashboard/Summary';
import Orders from './dashboard/Orders';
import Holdings from './dashboard/Holding';
import Positions from './dashboard/Positions';
import Login from './landing_page/signup/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/support' element={<Support />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<Summary/>}></Route>
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
      </Route>


      <Route path='/*' element={<NotFound />}></Route>

    </Routes>
  </BrowserRouter>
);

