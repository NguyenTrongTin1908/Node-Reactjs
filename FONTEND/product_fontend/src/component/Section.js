import React, { Component } from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as homeActions from "../actions/home.action";
import { bindActionCreators } from "redux";

import { dispatch } from "react-router-dom";
class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const handleFiller = () => {
      this.props.homeActions.getData();
    };
    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <NavLink
                      to="/shopgird?filter=thit"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Fresh Meat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=raucu"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Vegetables
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=traicay"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Fresh Fruits
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=haisan"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Ocean Foods
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=doanlien"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Fastfood
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=nuoc"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Drinks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=sua"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Milk
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shopgird?filter=banhkeo"
                      onClick={(event) => handleFiller(event.target.value)}
                    >
                      Candy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <Searchbar />
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>(+86)869038684</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                data-setbg="img/hero/banner.jpg"
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <NavLink to="/shop-grid" className="primary-btn">
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.homeReducers.all.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Section);
