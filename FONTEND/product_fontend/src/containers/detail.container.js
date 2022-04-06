import "../file/public/css/bootstrap.min.css";
import "../file/public/css/font-awesome.min.css";
import "../file/public/css/elegant-icons.css";
import "../file/public/css/nice-select.css";
import "../file/public/css/slicknav.min.css";
import "../file/public/css/style.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import axios from "axios";
import Detail from "../component/Detail";
// import * as homeActions from "../actions/home.action";
import { addNewHobby, getDetailProduct } from "../actions/home.action";
import Loading from "../component/loading/loading";
// import { sortTypes } from "../constants/action.types";
// import localStore from "../config/storage.config";
import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailContainer = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let deta = useSelector((state) => state.homeReducers.detail.data);

  let tin = "1";

  useLayoutEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch]);
  // function handleToggleSidebar() {
  //   handleToggleSidebar(!isCollapsed);
  // }

  // console.log("data dime la : ", this.props.data);

  return (
    <div>
      {deta !== "CC" ? (
        <div>
          <Detail data={deta} />{" "}
        </div>
      ) : (
        <div>Heee</div>
      )}
    </div>
  );
};

// class DetailContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentWillMount() {
//     console.log("ID LA ", this.props);
//     this.props.homeActions.getDetailProduct(this.props.match);
//   }

// render() {
//   const session = getSessionStorageOrDefault("cart", "cart");
//   console.log("SE la ", session);
//   const data = this.props;
//   console.log("data dime la : ", this.props.data);
//   if (data != null) {
//     return (
//       <div>
//         <Detail data={this.props.data} />
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }
// }
// const mapStateToProps = (state) => ({
//   data: state.homeReducers.detail.data,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     homeActions: bindActionCreators(homeActions, dispatch),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   homeActions: (keyword) => dispatch(bindActionCreators),
// });
// const mapDispatchToProps = (dispatch => {
//   return {
//     homeActions: bindActionCreators(homeActions,dispatch)
//   }

// }

export default DetailContainer;
