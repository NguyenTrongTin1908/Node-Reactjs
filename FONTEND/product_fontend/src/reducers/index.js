import { combineReducers } from "redux";
// import userReducers from "./user.reducer";
import homeReducers from "./home.reducer";
import productReducers from "./product.reducer";
import cartReducers from "./cart.reducer";
export default combineReducers({
  // userReducers,
  homeReducers,
  productReducers,
  cartReducers,
});
