import React, { Component } from "react";
import Register from "../component/register/Register";

import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import axios from "axios";
// import * as homeActions from "../actions/home.action";
import { actionLogin } from "../actions/home.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
import localStore from "../config/storage.config";
import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}
