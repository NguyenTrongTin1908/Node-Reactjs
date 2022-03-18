import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Checkout from "../component/Checkout";
import * as homeActions from "../actions/home.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
import localStore from "../config/storage.config";
import HomeContainer from "../containers/home.container";
import { useState } from "react";

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
    this.props.homeActions.getData();
  }

  render() {
    const session = getSessionStorageOrDefault("cart", "cart");
    console.log("SE la ", session);
    const data = this.props;
    console.log("data dime la : ", this.props.data);
    if (data != null) {
      return (
        <div>
          <Checkout data={this.props.data} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = (state) => ({
  data: state.homeReducers.checkout.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
