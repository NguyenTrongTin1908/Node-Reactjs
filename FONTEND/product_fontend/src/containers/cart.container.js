import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Cart from "../component/Cart";
import * as cartActions from "../actions/cart.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
import localStore from "../config/storage.config";

import { useState } from "react";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.cartActions.getData();
  }

  render() {
    const session = getSessionStorageOrDefault("cart", "cart");
    console.log("SE la ", session);
    const data = this.props;
    console.log("data dime la : ", this.props.data);
    if (data != null) {
      return (
        <div>
          <Cart dataCart={this.props.data} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = (state) => ({
  data: state.cartReducers.cart,
});

export default connect(mapStateToProps)(CartContainer);
