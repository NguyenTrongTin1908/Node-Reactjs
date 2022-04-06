import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Section from "./Section";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: this.props.userSession,
    };
  }

  render() {
    const logOut = () => {
      sessionStorage.removeItem(sessionStorage.removeItem("dataUser"));

      this.setState({
        userSession: null,
      });
    };

    return (
      <div>
        {/* Humberger Begin */}
        <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            {/* <NavLink to="/">
              <img src="img/logo.png" alt="" />
            </NavLink> */}
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <NavLink to="/">
                  <i class="fa fa-heart"></i> <span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <i className="fa fa-shopping-bag" />{" "}
                  <span>{this.props.numberCart}</span>
                </NavLink>
              </li>
            </ul>
            <div className="header__cart__price" />
          </div>
          <div class="humberger__menu__widget">
            <div class="header__top__right__language">
              {/* <img src="img/language.png" alt="" /> */}

              <div>English</div>
              <span class="arrow_carrot-down"></span>
              <ul>
                <li>
                  <NavLink to="/cart">
                    <i className="fa fa-shopping-bag" />{" "}
                    <span>{this.props.numberCart}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart">
                    <i className="fa fa-shopping-bag" />{" "}
                    <span>{this.props.numberCart}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div class="header__top__right__auth">
              <NavLink to="/cart">
                <i className="fa fa-shopping-bag" />{" "}
                <span>{this.props.numberCart}</span>
              </NavLink>
            </div>
          </div>

          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/">Pages</NavLink>
                <ul className="header__menu__dropdown">
                  <li>
                    <NavLink to="/cart">Shoping Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkout">Check Out</NavLink>
                  </li>
                  {/* <li><NavLink to="/blog-details">Blog Details</NavLink></li> */}
                </ul>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
          <div class="header__top__right__social">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-pinterest-p"></i>
            </a>
          </div>
          <div class="humberger__menu__contact">
            <ul>
              <li>
                <i class="fa fa-envelope"></i>{" "}
                {this.state.userSession ? this.state.userSession.email : ""}
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        {/* Humberger End */}
        {/* Header Section Begin */}
        <header className="header">
          <div class="header__top">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="header__top__left">
                    <ul>
                      <li>
                        <i class="fa fa-envelope"></i>{" "}
                        {this.state.userSession
                          ? this.state.userSession.email
                          : ""}
                      </li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="header__top__right">
                    <div class="header__top__right__social">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                    <div class="header__top__right__language">
                      {/* <img src="img/language.png" alt=""> */}
                      <div>English</div>
                      <span class="arrow_carrot-down"></span>
                      <ul>
                        <li>
                          <a href="#">Spanis</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div class="header__top__right__auth">
                      {this.state.userSession ? (
                        <NavLink to="/" onClick={logOut}>
                          <i class="fa fa-user"> </i>Logout
                        </NavLink>
                      ) : (
                        <NavLink to="/login">
                          <i class="fa fa-user"> </i>Login
                        </NavLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <NavLink to="/">
                    <img src="img/logo.png" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Pages</NavLink>
                      <ul className="header__menu__dropdown">
                        <li>
                          <NavLink to="/cart">Shoping Cart</NavLink>
                        </li>
                        <li>
                          <NavLink to="/checkout">Check Out</NavLink>
                        </li>
                      </ul>
                    </li>
                    {/* <li><NavLink to="/blog">Blog</NavLink></li> */}
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <i class="fa fa-heart"></i> <span></span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">
                        <i className="fa fa-shopping-bag" />

                        <span>{this.props.numberCart}</span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className="header__cart__price" />
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* Hero Section Begin */}

        <Section />
        {/* Hero Section End */}
        <div className="w3-container">
          <div id="id01" className="w3-modal" style={{ display: "none" }}>
            <div className="w3-modal-content" style={{ width: "400px" }}>
              <div className="modal-content ">
                <div className="modal-header">
                  <h5 style={{ fontFamily: "Cairo" }}>OGANI</h5>
                  <button
                    onclick="document.getElementById('id01').style.display='none'"
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    style={{ fontSize: "20px" }}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="textsub" />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onclick="document.getElementById('id01').style.display='none'"
                    style={{ fontSize: "15px" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  numberCart: state.cartReducers.cart.numberCart,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
