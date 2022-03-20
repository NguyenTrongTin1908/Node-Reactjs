import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Checkout extends Component {
  render() {
    return (
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
            <form action="/bill" method="POST">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="first_name"
                          className="first_name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="last_name"
                          className="last_name"
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
                      placeholder="Street Address"
                      className="checkout__input__add"
                      name="street_address"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                      name="apartment_address"
                      className="apartment_address"
                    />
                  </div>
                  {/* <div class="checkout__input">
                                <p>Town/City<span>*</span></p>
                                <input type="text">
                            </div> */}
                  {/* <div class="checkout__input">
                                <p>Country/State<span>*</span></p>
                                <input type="text">
                            </div> */}
                  {/* <div class="checkout__input">
                                <p>Postcode / ZIP<span>*</span></p>
                                <input type="text">
                            </div> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input type="text" name="phone" className="phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input type="text" name="email" className="email" />
                      </div>
                    </div>
                  </div>
                  {/* <p>Create an account by entering the information below. If you are a returning customer
                                please login at the top of the page</p>
                  <div class="checkout__input">
                                <p>Account Password<span>*</span></p>
                                <input type="text">
                            </div>
                  <div class="checkout__input__checkbox">
                                <label for="diff-acc">
                                    Ship to a different address?
                                    <input type="checkbox" id="diff-acc">
                                    <span class="checkmark"></span>
                                </label>
                            </div> */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Your Order</h4>
                    <div className="checkout__order__products">
                      Products <span>Total</span>
                    </div>
                    {this.props.dataCart.cartStore.map((element, index) => {
                      return (
                        <ul>
                          <li>
                            {element.name}
                            <span>{element.price * element.quantity}</span>
                          </li>
                        </ul>
                      );
                    })}

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
                      Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <NavLink to="/bill" className="primary-btn cart-btn">
                      Place Order
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
