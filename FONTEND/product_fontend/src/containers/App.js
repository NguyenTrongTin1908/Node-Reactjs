import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./home.container";
import CartContainer from "./cart.container";
import CheckoutContainer from "./checkout.container";
import BillContainer from "./bill.container";
import DetailContainer from "./detail.container";
import AboutContainer from "./about.container";
import LoginContainer from "./login.container";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomeContainer />} />
      <Route exact path="/cart" element={<CartContainer />} />
      <Route exact path="/checkout" element={<CheckoutContainer />} />
      <Route exact path="/bill" element={<BillContainer />} />
      <Route exact path="/about" element={<AboutContainer />} />
      <Route path="/detail/:id" element={<DetailContainer />} />
      <Route path="/login" element={<LoginContainer />} />
    </Routes>
  </Router>
);

export default App;
