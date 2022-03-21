import React, { Component } from "react";
import "./Login.css";
import Footer from "../Footer";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    alert(this.state.email);
  };
  render() {
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
              {/* <div class="iconmelon">
        <svg viewBox="0 0 32 32">
          <g filter="">
               
            <use xlink:href="#git "></use>
          </g>
        </svg>
      </div> */}
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
                    onChange={(event) => {
                      this.handleEmailChange(event);
                    }}
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
                    onChange={(event) => {
                      this.handlePasswordChange(event);
                    }}
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  {/* Button */}
                  <div className="col-sm-12 controls">
                    <button
                      className="btn btn-lg btn-primary btn-block"
                      onClick={() => {
                        this.handleLogin();
                      }}
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
  }
}
