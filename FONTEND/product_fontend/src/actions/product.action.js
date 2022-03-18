import axios from "axios";
import { productTypes } from "../constants/action.types";
import storeConfig from "../config/storage.config";
export const getProductDetail = (id) => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get("http://localhost:4080/getDetailbook/" + id);
  } catch (err) {
    return;
  }
  dispatch(setProductDetail(res.data.data));
};

export const addToCart = (product) => async (dispatch, getState) => {
  if (getState().userReducers.login.islogin) {
    let res;
    try {
      res = await axios.post("http://localhost:8080/cart/addtocard", {
        id_user: storeConfig.getUser().id,
        products: [product],
      });
    } catch (err) {
      console.log(JSON.stringify(err.response));
      return;
    }
  } else {
    storeConfig.addProductToCart(product);
  }
};
