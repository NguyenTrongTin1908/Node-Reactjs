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
    res = await axios.get("http://localhost:4000/getdatamongodb");
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
    res = await axios.get(
      "http://localhost:4000/detail/getdetailProduct/" + id
    );
  } catch (err) {
    return err;
  }

  dispatch(setDetailProduct(res.data));
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

export const addNewHobby = (product) => {
  // console.log("Day LA KQ Trong detail ");
  return {
    type: homeTypes.SET_HOBBY,
    payload: product,
  };
};
