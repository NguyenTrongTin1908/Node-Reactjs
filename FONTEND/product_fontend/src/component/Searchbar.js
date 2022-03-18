import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
        <form action="/shop-grid" method="GET">
        <div className="hero__search__categories">
          All Categories
          {/* <span class="arrow_carrot-down"></span> */}
        </div>
        <input type="text" placeholder="What do yo u need?" name="searchbar" />
        <button type="submit" id="buttonsearch" className="site-btn">SEARCH</button>
      </form>
      
    )
  }
}
