import React, { Component } from 'react'

export default class Bill extends Component {
  render() {
    return (
        <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            </div>
          </div>
          <div className="checkout__form">
            <h4>Billing Details</h4>
            <form action="/continue" method="POST">
              <div className="bill">
                <div className="bill">
                  <div className="col-lg-4 col-md-6">
                    <div className="bill__order">
                      <h4>Your Bill</h4>
                      <div className="checkout__order__products">Products <span>Total</span></div>
                      &lt;%  
                      if(session.totalQty!=0){'{'}
                      getcart.forEach(e=&gt;{'{'}  %&gt;
                      <ul>
                        <li>&lt;%= e.item.tensp%&gt; <span>&lt;%=e.totalprice%&gt;</span></li>
                      </ul>
                      &lt;%     {'}'})%&gt;
                      &lt;%{'}'} %&gt;
                      <div className="checkout__order__subtotal">Subtotal <span>&lt;%=subtotal %&gt;</span><br />
                        <span style={{color: 'red', fontSize: '12px'}}> - &lt;%=phantram %&gt;%</span></div>
                      <div className="checkout__order__total">Total <span>&lt;%=subtotal*(100-phantram)/100 %&gt;</span></div>
                      {/* <div class="checkout__input__checkbox">
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or">
                                        <span class="checkmark"></span>
                                    </label>
                                </div> */}
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p> */}
                      <button type="submit" className="site-btn">Continue Shoping</button>
                    </div>
                  </div>
                </div>
              </div></form>
          </div>
        </div>
      </section>
      
    )
  }
}
