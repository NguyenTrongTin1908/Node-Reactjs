import React, { Component } from "react";
import Header from "./Header";
import Section from "./Section";

export default class Shopgird extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Header />

          <section className="product spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-7">
                  <div className="filter__item">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="filter__sort"></div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                          <h6>
                            <span>16</span> Products found
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {this.props.dataShopGird.map((element, index) => {
                      let filename = "images/";
                      let namesp = element.fileanh;
                      var foder = element.maloaisp + "/";
                      filename = filename + foder + namesp;
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="product__item">
                            <div
                              className="product__item__pic set-bg"
                              style={{
                                backgroundImage: "url(" + filename + ")",
                              }}
                            >
                              <ul className="product__item__pic__hover">
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-retweet" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-shopping-cart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product__item__text">
                              <h6>
                                <a href="#">{element.tensp}</a>
                              </h6>
                              <h5>{element.gia}</h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="product__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
