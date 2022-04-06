import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("prop trong cart la ", this.props.subtotal);
    // let ListCart = [];
    // let TotalCart = 0;
    // this.props.item.map((element, index) => {
    //   TotalCart += element.gia * element.sl;
    //   ListCart.push(element);
    // });
    // let totalPrice = Number(price * tonggia).toLocaleString("en-US");
  }

  render() {
    return (
      <div>
        <Header />

        <section className="shoping-cart spad">
          <div className="container">
            {/* <form action="/checkout" method="GET"> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.dataCart ? (
                        this.props.dataCart.cartStore.map((element, index) => {
                          console.log("THIS PROPS", element);
                          return (
                            <tr className="shoping_tr">
                              <td
                                className="shoping__cart__item"
                                // field="updates_<%=e.item.tensp %>"
                                // name="item_<%=id%>"
                              >
                                <img
                                  // style={{ width: "100px" }}
                                  // src="images/<%=e.item.maloaisp%>/<%=e.item.fileanh%>"
                                  alt=""
                                />
                                <h5>{element.name}</h5>
                              </td>
                              <td className="shoping__cart__price">
                                <div
                                // className="price_updates_<%=e.item._id %>"
                                // name="price_<%=id%>"
                                >
                                  {element.price}
                                </div>
                              </td>
                              <td className="shoping__cart__quantity">
                                <div className="quantity">
                                  <div
                                    className="pro-qty"
                                    id="bt_update"
                                    field={"updates_" + element.id}
                                  >
                                    <input
                                      type="text"
                                      name="y"
                                      defaultValue={element.quantity}
                                      // className="qty_updates_<%=e.item._id %>"
                                      // field="updates_<%=e.item._id %>"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="shoping__cart__total">
                                <div
                                  className={"total_updates_" + element.id}
                                  id={element.id}
                                  name={"total_" + element.id}
                                >
                                  {element.price * element.quantity}
                                </div>
                              </td>
                              <td className="shoping__cart__item__close">
                                <span className="icon_close" />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </tbody>
                  </table>
                  ;
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__btns">
                  <NavLink to="/" className="primary-btn cart-btn">
                    CONTINUE SHOPPING
                  </NavLink>
                  {/* <NavLink to="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</NavLink> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                  <h5>Cart Total</h5>
                  <ul>
                    <li>
                      Subtotal{" "}
                      <span className="all_sub" name="total">
                        {this.props.subtotal}
                      </span>
                    </li>
                    <li>
                      {" "}
                      {/* Discount(%){" "} */}
                      {/* <span className="discount">&lt;%=phantram%&gt; </span> */}
                    </li>
                    <li>
                      Total{" "}
                      <span className="all_total">
                        {/* &lt;%=subtotal - (subtotal*phantram/100)%&gt;{" "} */}
                      </span>
                    </li>
                  </ul>
                  {/* <button type="submit" className="site-btn">
                    Check out
                  </button> */}
                  <NavLink to="/checkout" className="primary-btn cart-btn">
                    Checkout
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    {/* <h5>Discount Codes</h5>
                    <form action="/add-coupon" method="POST">
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Enter your coupon code"
                        defaultValue="<%=coupon_code%>"
                      />
                      <button type="submit" className="site-btn">
                        APPLY COUPON
                      </button>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
