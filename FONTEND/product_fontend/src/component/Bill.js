import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

export default class Bill extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
            <div className="checkout__form">
              <h4>Billing Details</h4>
              <form action="/continue" method="POST">
                <div className="bill">
                  <div className="bill">
                    <div className="col-lg-4 col-md-6">
                      <div className="bill__order">
                        <h4>Your Bill</h4>
                        <div className="checkout__order__products">
                          Products <span>Total</span>
                        </div>
                        {this.props.dataCart ? (
                          this.props.dataCart.cartStore.map(
                            (element, index) => {
                              return (
                                <ul>
                                  <li>
                                    {" "}
                                    {element.name}
                                    <span>
                                      {element.price * element.quantity}
                                    </span>
                                  </li>
                                </ul>
                              );
                            }
                          )
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

                        {/* <div class="checkout__input__checkbox">
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or">
                                        <span class="checkmark"></span>
                                    </label>
                                </div> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p> */}
                        <NavLink to="/" className="primary-btn cart-btn">
                          CONTINUE SHOPPING
                        </NavLink>
                      </div>
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
