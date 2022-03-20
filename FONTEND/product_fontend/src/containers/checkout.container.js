import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Checkout from "../component/Checkout";
import * as checkoutActions from "../actions/checkout.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
import localStore from "../config/storage.config";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.data.total =
      (this.props.data.subtotal * (100 - this.props.data.discount)) / 100;
  }

  render() {
    const session = getSessionStorageOrDefault("cart", "cart");
    console.log("SE la ", session);
    // const data = this.props;
    // console.log("data dime la : ", this.props.data);
    // if (data != null) {
    if (this.props.data.total != 0) {
      return (
        <div>
          <Checkout
            dataCart={this.props.data}
            subtotal={this.props.data.subtotal}
            total={this.props.data.total}
            discount={this.props.data.discount}
          />
        </div>
      );
    } else return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  data: state.cartReducers.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // homeActions: bindActionCreators(homeActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
