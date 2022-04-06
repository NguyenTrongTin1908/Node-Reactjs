import React, { Component } from "react";
import { useState, useEffect } from "react";
import { searchProduct } from "../actions/home.action";
import { useDispatch, useSelector } from "react-redux";

const Searchbar = (props) => {
  const dispatch = useDispatch();
  const [dataSearch, setdataSearch] = useState("");

  const changeInputValue = (event) => {
    setdataSearch(event);
    console.log(`dataSearch la ${dataSearch} `);
  };

  // useEffect(() => {

  // }, [dataSearch]);

  const handleSearch = (event) => {
    // event.preventDefault();
    console.log("Dữ liệu trong buttton", dataSearch);
    dispatch(searchProduct(dataSearch));

    // let sourceArray = "";
    // let newArray = [];
    // if (event.length <= 0) {
    //   newArray = sourceArray;
    // } else {
    //   event.toLowerCase();
    //   for (let item of sourceArray) {
    //     if (item.name.toLowerCase().indexOf(event) > -1) {
    //       newArray.push(item);
    //     }
    //   }
    // }
    // this.setState({
    //   items: newArray,
    //   valueSearch: event,
    // });
  };

  return (
    <form action="/shopgird">
      <div className="hero__search__categories">
        All Categories
        {/* <span class="arrow_carrot-down"></span> */}
      </div>
      <input
        type="text"
        name="filter"
        value={dataSearch}
        onChange={(event) => changeInputValue(event.target.value)}
      />
      <button
        // type="button"
        id="buttonsearch"
        className="site-btn"
        onClick={(event) => handleSearch(event.target.value)}
      >
        SEARCH
      </button>
    </form>
  );
};

export default Searchbar;
