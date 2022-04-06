import React, { Component } from "react";
import Shopgird from "../component/Shopgird";
import "../file/public/css/bootstrap.min.css";
import "../file/public/css/font-awesome.min.css";
import "../file/public/css/elegant-icons.css";
import "../file/public/css/nice-select.css";
import "../file/public/css/slicknav.min.css";
import "../file/public/css/style.css";

import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import axios from "axios";
// import * as homeActions from "../actions/home.action";
import { actionLogin } from "../actions/home.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
import localStore from "../config/storage.config";
import { useState, useEffect, useLayoutEffect } from "react";
import { searchProduct } from "../actions/home.action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const ShopgirdContainer = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state) => state.homeReducers.all.dataShopgird
  );
  let location = useLocation();
  console.log(queryString.parse(location.search));
  useEffect(() => {
    dispatch(searchProduct(queryString.parse(location.search)));
  }, []);
  console.log("productList :", productList);

  if (productList != null) {
    return (
      <div>
        <Shopgird dataShopGird={productList} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ShopgirdContainer;
