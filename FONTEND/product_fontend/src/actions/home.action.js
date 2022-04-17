import axios from "axios";
import { homeTypes, sortTypes } from "../constants/action.types";

export const setData = (data) => ({
  type: homeTypes.SET_ALL_PRODUCT,
  data,
});
export const getData = () => async (dispatch, getState) => {
  let res;
  console.log("Day LA KQ Trong detail ");
  try {
    res = await axios.get("http://localhost:4000/api/index/allProduct");
  } catch (err) {
    return err;
  }

  dispatch(setData(res.data));
};

export const setDetailProduct = (data) => ({
  type: homeTypes.SET_DETAIL_PRODUCT,
  payload: data,
});

export const getDetailProduct = (id) => async (dispatch, getState) => {
  let res;
  // let id = "621cc3770e2e414294d12001";
  try {
    res = await axios.get("http://localhost:4000/api/index/product/" + id);
  } catch (err) {
    return err;
  }

  dispatch(setDetailProduct(res.data));
};

const setResultSearch = (data) => ({
  type: homeTypes.SET_DATA_SEARCH,
  payload: data,
});

export const searchProduct = (Key) => async (dispatch, getState) => {
  let res;

  console.log("searchKey la ", Key.searchKey);
  try {
    res = await axios.get(
      "http://localhost:4000/api/index/search?searchKey=" + Key.filter
    );
  } catch (err) {
    return err;
  }

  dispatch(setResultSearch(res.data));
};

export const fillerProduct = (Key) => async (dispatch, getState) => {
  let res;

  console.log("searchKey la ", Key);
  try {
    res = await axios.get(
      "http://localhost:4000/api/index/filler?fillerKey=" + Key.filter
    );
  } catch (err) {
    return err;
  }

  dispatch(setResultSearch(res.data));
};
// export const getDetailProduct = (id) => {
//   console.log("Day LA KQ Trong detail ");
//   return {
//     type: homeTypes.SET_DETAIL_PRODUCT,
//     payload: id,
//   };
// };

// export const addToCart = (product) => {
//   console.log("Day LA KQ Trong addTocart ");
//   return {
//     type: homeTypes.SET_DETAIL_PRODUCT,
//     payload: product,
//   };
//   console.log("Day LA KQ Trong detail ");
// };

export const actionLogin = (email, password) => async (dispatch, getState) => {
  axios
    .post("http://localhost:4000/user/login", {
      // email: this.state.email,
      // password: this.state.password,
      email,
      password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export function Bill(data) {
  console.log("trong bill ", data);

  axios
    .post("http://localhost:4000/api/index/bill", {
      account: data.account,
      bill: data.bill,
      info: data.info,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
