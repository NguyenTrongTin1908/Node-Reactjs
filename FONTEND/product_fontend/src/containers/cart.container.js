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
    this.props.data.cartStore.map((element, index) => {
      this.props.data.subtotal += element.price * element.quantity;
    });
  }

  render() {
    const session = getSessionStorageOrDefault("cart", "cart");

    const data = this.props;

    if (data != null && this.props.data.subtotal != 0) {
      return (
        <div>
          <Cart
            dataCart={this.props.data}
            subtotal={this.props.data.subtotal}
            discount={this.props.data.discount}
          />
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
