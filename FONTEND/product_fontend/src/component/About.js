import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("About : ", this.props.data);
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {/* <div class="col-lg-12">
        <div class="section-title">
          <h2>About us</h2>
        </div>
      </div>
      <div class="">
        <div class="col-lg-3">
          <div class="product__discount__item">
            abc
          </div>
        </div>
      </div> */}
            <div className="col-lg-12">
              <div className="section-title">
                <h2>About Our Shop</h2>
              </div>
            </div>
            <div className="col-lg-12" align="justify">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <h4>
                  With over 200 supermarkets in Ho Chi Minh City and 196,000
                  customers served every day, OGANI is a mini supermarket chain
                  specializing in selling fresh food and leading necessities.
                  <br />
                  <br />
                  Various goods diverse: DRINKS, BEER, SOFT DRINK, MILK POWDER,
                  FRESH MILK, CANNED FOOD, CANDY, CAKE
                  <br />
                  <br />
                </h4>
              </div>
              <div className="col-lg-2" />
            </div>
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Who Are We?</h2>
              </div>
            </div>
            <div className="col-lg-12" align="justify">
              <div className="col-lg-2" />
              <div className="col-lg-3" align=" right">
                <h4>Members:</h4>
              </div>
              <div className="col-lg-5">
                <h4>
                  NGUYỄN NGỌC TIỄN
                  <br />
                  <br />
                  NGUYỄN TRỌNG TÍN
                  <br />
                  <br />
                  LÊ HOÀNG MINH TUẤN
                  <br />
                  <br />
                  PHẠM NGUYÊN TIẾP
                  <br />
                  <br />
                </h4>
              </div>
              <div className="col-lg-2" />
            </div>
            {/* <div class="col-lg-12">
        <div class="section-title">
          <h2>Our Services</h2>
        </div>
      </div>
      <div class="">
        <div class="col-lg-3">
          <div class="product__discount__item">
            abc
          </div>
        </div>
      </div> */}
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Project</h2>
              </div>
            </div>
            <div className="col-lg-12" align="justify">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <h4>
                  Director of OGANI, said that he would open 500 new stores in
                  2022, bringing the total to 700 stores. This statement was
                  made during the signing ceremony of OGANI's strategic
                  cooperation with FrieslandCampina, the owner of the Dutch Lady
                  brand.
                </h4>
              </div>
              <div className="col-lg-2" />
            </div>
            {/* <div class="col-lg-12">
          <div class="section-title">
            <h2>About us</h2>
          </div>
        </div>
        <div class="">
          <div class="col-lg-3">
            <div class="product__discount__item">
              abc
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.cartReducers,
});

export default connect(mapStateToProps)(About);
