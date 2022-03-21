import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Banner Begin */}
        {/* <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Banner End */}
        {/* Latest Product Section Begin */}
        {/* <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a
                        // href={"detail" + element._id}
                        className="latest-product__item"
                      >
                        <div className="latest-product__item__pic">
                          <h1></h1>
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="/#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Latest Product Section End */}
        {/* Blog Section Begin */}
        <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-1.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/#">Cooking tips make cooking simple</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-2.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/#">6 ways to prepare breakfast for 30</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/blog-3.jpg" alt="" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/#">Visit the clean farm in the US</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
