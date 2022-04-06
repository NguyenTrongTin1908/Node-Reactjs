import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./home.container";
import CartContainer from "./cart.container";
import CheckoutContainer from "./checkout.container";
import BillContainer from "./bill.container";
import DetailContainer from "./detail.container";
import AboutContainer from "./about.container";
import LoginContainer from "./login.container";
import ShopgirdContainer from "./shopgird.container";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomeContainer />} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/checkout" element={<CheckoutContainer />} />
      <Route path="/bill" element={<BillContainer />} />
      <Route path="/about" element={<AboutContainer />} />
      <Route path="/detail/:id" element={<DetailContainer />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/shopgird" element={<ShopgirdContainer />} />
      <Route path="/contact" element={<AboutContainer />} />
    </Routes>
  </Router>
);

export default App;
