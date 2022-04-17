import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as homeActions from "../actions/home.action";
import { Bill } from "../actions/home.action";
import { Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _name: "",
      _address: "",

      _phone: "",
    };
  }

  componentWillMount() {
    // console.log("ID la ", user.email);
    // const navigate = useNavigate();
    // console.log("Data la ", this.props);
  }
  // handleBill = (event) => {};

  submitForm = (event) => {
    const user = getSessionStorageOrDefault("dataUser", "");

    let data = {
      info: this.state,
      account: user,
      bill: this.props,
    };

    event.preventDefault();
    Bill(data);
    this.props.history.push("/bill");
  };

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;

    this.setState({
      [ten]: giatri,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6>
                  <span className="icon_tag_alt" /> Have a coupon?{" "}
                  <a href="/shoping-cart">Click here</a> to enter your code
                </h6>
              </div>
            </div>
            <div className="checkout__form">
              <h4>Billing Details</h4>
              <form>
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Name<span>*</span>
                          </p>
                          <input
                            onChange={(event) => this.isChange(event)}
                            type="text"
                            name="_name"
                            placeholder="Name"
                            className="first_name"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div class="checkout__input">
                                <p>Country<span>*</span></p>
                                <input type="text">
                            </div> */}
                    <div className="checkout__input">
                      <p>
                        Address<span>*</span>
                      </p>
                      <input
                        type="text"
                        onChange={(event) => this.isChange(event)}
                        placeholder="Address"
                        className="checkout__input__add"
                        name="_address"
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Phone<span>*</span>
                          </p>
                          <input
                            type="text"
                            onChange={(event) => this.isChange(event)}
                            name="_phone"
                            className="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="checkout__order">
                      <h4>Your Order</h4>
                      <div className="checkout__order__products">
                        Products <span>Total</span>
                      </div>
                      {this.props.dataCart ? (
                        this.props.dataCart.cartStore.map((element, index) => {
                          return (
                            <ul>
                              <li>
                                {element.name}
                                <span>{element.price * element.quantity}</span>
                              </li>
                            </ul>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                      <div className="checkout__order__subtotal">
                        Subtotal <span>{this.props.subtotal}</span>
                        <br />
                        <span style={{ color: "red", fontSize: "12px" }}>
                          -{this.props.discount}%
                        </span>
                      </div>
                      <div className="checkout__order__total">
                        Total <span>{this.props.total}</span>
                      </div>
                      {/* // <div class="checkout__input__checkbox">
                    //                 <label for="acc-or">
                    //                     Create an account?
                    //                     <input type="checkbox" id="acc-or">
                    //                     <span class="checkmark"></span>
                    //                 </label>
                    //             </div> */}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      {/* <NavLink
                        to="/bill"
                        className="primary-btn cart-btn"
                      ></NavLink> */}
                      <button
                        className="primary-btn cart-btn"
                        onClick={(event) => this.submitForm(event)}
                        type="submit"
                      >
                        <i className />
                        Place Order
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  Bill: (item) => dispatch(Bill(item)),
});

const mapStateToProps = (state) => ({
  data: state.cartReducers.cart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
