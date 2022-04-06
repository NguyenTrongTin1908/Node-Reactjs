/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddCart } from "../actions/cart.action";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.userSession ? (
          <Header userSession={this.props.userSession} />
        ) : (
          <Header userSession={null} />
        )}

        <section className="categories">
          <div className="container">
            <div className="row">
              <div class="categories__slider owl-carousel">
                {this.props.dataLoad ? (
                  this.props.dataLoad.map((element, index) => {
                    let filename = "/public/images/";
                    let namesp = element.fileanh;
                    var foder = element.maloaisp + "/";
                    filename = filename + foder + namesp;
                    var phantramgiamgia = element.phantram;

                    return (
                      <div class="col-lg-3">
                        <div class="product__discount__item">
                          <div
                            class="product__discount__item__pic set-bg"
                            style={{ backgroundImage: "url(" + filename + ")" }}
                          >
                            <div class="product__discount__percent">
                              {phantramgiamgia}
                            </div>
                            <ul class="product__item__pic__hover">
                              <li>
                                <span
                                  onClick={() => this.props.AddCart(element)}
                                >
                                  <i className="fa fa-shopping-cart" />
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div class="product__discount__item__text" id="CC">
                            <span>{element.chitiet}</span>
                            <h5 style={{ fontSize: `17px` }}>
                              <a href={"/details/" + element._id}></a>
                            </h5>

                            <div class="product__item__price">
                              <span>element.gia</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges" id="CC">
                      Oranges
                    </li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {/* Loaddata */}
              {this.props.dataLoad.map((element, index) => {
                let filename = "images/";
                let namesp = element.fileanh;
                var foder = element.maloaisp + "/";
                filename = filename + foder + namesp;
                var phantramgiamgia = element.phantram;

                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div className="featured__item">
                      <div
                        className="featured__item__pic set-bg"
                        style={{ backgroundImage: "url(" + filename + ")" }}
                      >
                        <ul className="featured__item__pic__hover">
                          <li>
                            <span onClick={() => this.props.AddCart(element)}>
                              <i className="fa fa-shopping-cart" />
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <a href={"detail/" + element._id}>{element.tensp}</a>
                        </h6>
                        <h5>{element.gia}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Featured Section End */}
        <Footer />
        {/* Blog Section End */}

        <script>
          let elm=document.getElementById("CC") elm.style.color="#0174DF"
        </script>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.cartReducers.cart.cartStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // AddCart: (item) => dispatch(AddCart(item)),

    AddCart: (item) => dispatch(AddCart(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
