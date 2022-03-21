import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Bill from "../component/Bill";
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

class BillContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.homeActions.getData();
  }

  render() {
    const session = getSessionStorageOrDefault("dataCart", "cart");
    console.log("SE la ", session);
    const data = this.props;
    console.log("data dime la : ", this.props.data);
    if (data != null) {
      return (
        <div>
          <Bill
            dataCart={this.props.data}
            subtotal={this.props.data.subtotal}
            total={this.props.data.total}
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

const mapDispatchToProps = (dispatch) => {
  return {
    // homeActions: bindActionCreators(homeActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillContainer);
