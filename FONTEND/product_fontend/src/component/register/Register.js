import React, { Component } from "react";

import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Footer from "../Footer";
import axios from "axios";
import { Redirect, withRouter } from "react-router";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValue] = useState({
    email: "",
    password: "",
    errMess: "",
  });
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     redirect: true,
  //     email: "",
  //     password: "",
  //     errMess: "",

  //     // this.delta = this.delta.bind(this);
  //   };
  //   // this.errMess = this.errMess.bind(this);
  // }

  const handleEmailChange = (event) => {
    event.persist();
    setValue((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    event.persist();
    setValue((values) => ({
      ...values,
      password: event.target.value,
    }));

    // console.log("state la: ", values);
  };

  const handleRegister = (event) => {
    setValue((values) => ({
      ...values,
      errMess: "",
    }));
    axios
      .post("http://localhost:4000/register", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        {
          console.log("res la", response);
          if (response.data) {
            sessionStorage.setItem("dataUser", JSON.stringify(response.data));
            console.log("dung", response.data);
            navigate("/");
            // this.setState({ redirect: true });

            // return <Redirect to="/" />;
            // <Redirect
            //   from="http://localhost:3000/login"
            //   to="http://localhost:3000/"
            // />;
          }
        }
      })
      .catch((error) => {
        {
          if (error.response) {
            if (error.response.data) {
              setValue((values) => ({
                ...values,
                errMess: error.response.data,
              }));
            }
          }
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div
          id="loginbox"
          className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"
        >
          <div className="row">
            <div className="col-sm-12" style={{ marginTop: "8em" }}>
              <a href="/">
                <img src="img/logo.png" />
              </a>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title text-center">Welcome to us</div>
            </div>
            <div className="panel-body">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock" />
                </span>
                <input
                  type="password"
                  onChange={handlePasswordChange}
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="col-12" style={{ color: "red" }}>
                {/* {this.state.errMess} */}
              </div>
              <div className="form-group">
                {/* Button */}
                <div className="col-sm-12 controls">
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    onClick={handleRegister}
                    type="button"
                  >
                    <i className="glyphicon glyphicon-log-in" /> Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="particles" />
      <Footer />
    </div>
  );
};

export default Register;
