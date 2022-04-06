import { homeTypes, sortTypes, cartTypes } from "../constants/action.types";
import { combineReducers } from "redux";

const InitialState = {
  _products: [],
  list: [],
  numberCart: "1",
  activeId: null,
  id: null,
  data: "CC",
  cart: [],
  searchData: "",
  dataShopgird: "CC",
};

const all = (state = { data: [] }, action) => {
  switch (action.type) {
    case homeTypes.SET_ALL_PRODUCT: {
      return {
        ...state,
        data: action.data,
      };
    }
    case homeTypes.SET_DATA_SEARCH: {
      console.log("Day LA KQ trong serach", action.payload);

      return {
        ...state,
        dataShopgird: action.payload,
      };
    }
    default:
      return state;
  }
};

// const detail = (state = { data: [] }, action) => {
//   switch (action.type) {
//     case homeTypes.SET_DETAIL_PRODUCT: {
//       return {
//         ...state,
//         data: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

const detail = (state = InitialState, action) => {
  switch (action.type) {
    case homeTypes.SET_DETAIL_PRODUCT: {
      console.log("Day LA KQ kieu Trong detail dmm e", typeof action.payload);

      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

const hobbyReducer = (state = InitialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
  }
};

// console.log("detail LA :", detail);

export default combineReducers({
  detail,
  all,
});
