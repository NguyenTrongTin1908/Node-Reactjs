import React, { Component } from 'react';
import Searchbar from './Searchbar';

class Section extends Component {
    render() {
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
            <li><a href="/shop-grid?search=thit">Fresh Meat</a></li>
            <li><a href="/shop-grid?search=raucu">Vegetables</a></li>
            <li><a href="/shop-grid?search=traicay">Fresh Fruits</a></li>
            <li><a href="/shop-grid?search=haisan">Ocean Foods</a></li>
            <li><a href="/shop-grid?search=doanlien">Fastfood</a></li>
            <li><a href="/shop-grid?search=nuoc">Drinks</a></li>
            <li><a href="/shop-grid?search=sua">Milk</a></li>
            <li><a href="/shop-grid?search=banhkeo">Candy</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="hero__search">
          <div className="hero__search__form">
            <Searchbar/>
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
        <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
          <div className="hero__text">
            <span>FRUIT FRESH</span>
            <h2>Vegetable <br />100% Organic</h2>
            <p>Free Pickup and Delivery Available</p>
            <a href="/shop-grid" className="primary-btn">SHOP NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        );
    }
}

export default Section;