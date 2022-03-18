import axios from "axios";
import { sortTypes, cartTypes } from "../constants/action.types";

export function AddCart(payload) {
  return {
    type: cartTypes.ADD_CART,
    payload,
  };
}
