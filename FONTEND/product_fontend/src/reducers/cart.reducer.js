import { sortTypes, cartTypes } from "../constants/action.types";
import { combineReducers } from "redux";

const InitialState = {
  numberCart: 0,
  cartStore: [],
  subtotal: 0,
  discount: 0,
  total: 0,
  discount: 20,
};

const cart = (state = InitialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_CART:
      if (state.numberCart == 0) {
        console.log("Trong cart reduce ", action.payload);
        let cart = {
          id: action.payload._id,
          quantity: 1,
          name: action.payload.tensp,
          price: action.payload.gia,
        };
        state.cartStore.push(cart);
      } else {
        let check = false;
        state.cartStore.map((item, key) => {
          if (item.id == action.payload._id) {
            state.cartStore[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload._id,
            quantity: 1,
            name: action.payload.tensp,
            price: action.payload.gia,
          };
          state.cartStore.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    default:
      return state;
  }
};

console.log("cart trong reducer LA :", InitialState);

export default combineReducers({
  cart,
});
