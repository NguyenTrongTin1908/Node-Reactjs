import axios from "axios";
import { homeTypes } from "../constants/action.types";
export const setTopProduct = (data) => ({
  type: homeTypes.SET_TOP_PRODUCT,
  data,
});
// export const setAddProduct = (data) => ({
//   type: homeTypes.SET_TOP_PRODUCT,
//   data,
// });
// export const setEditProduct = (data) => ({
//   type: homeTypes.SET_TOP_PRODUCT,
//   data,
// });
export const setdeleteProduct = (data) => ({
  type: homeTypes.DEL_TOP_PRODUCT,
  data,
});

export const getTopProduct = () => async (dispatch, getState) => {
  let res;

  try {
    res = await axios.get("http://localhost:4000/getdatamongodb");
  } catch (err) {
    return err;
  }
  console.log("Day LA KQ Trong  ", res.data);
  dispatch(setTopProduct(res.data));
};

export const AddProduct = () => async (dispatch, getState) => {
  let res;

  try {
    res = await axios.get("http://localhost:4000/getdatamongodb");
  } catch (err) {
    return err;
  }
  console.log("Day LA KQ Trong  ", res.data);

  dispatch(setTopProduct(res.data));
};
export const EditProduct = () => async (dispatch, getState) => {
  let res;

  try {
    res = await axios.get("http://localhost:4000/getdatamongodb");
  } catch (err) {
    return err;
  }
  console.log("Day LA KQ Trong  ", res.data);

  dispatch(setTopProduct(res.data));
};
export const deleteProduct = (id) => async (dispatch, getState) => {
  let res;

  try {
    res = await axios.get("http://localhost:4000/deleteProduct/" + id);
  } catch (err) {
    return err;
  }
  console.log("Day LA KQ Trong  ", res.data);

  dispatch(getTopProduct(res.data));
};
