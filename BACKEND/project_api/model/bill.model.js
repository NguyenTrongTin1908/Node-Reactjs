import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const billSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    min: 1,
    max: 1000,
  },
  address: {
    type: String,
    required: true,
    min: 1,
    max: 1000,
  },
  phone: {
    type: String,
    required: true,
    min: 1,
    max: 1000,
  },
  total_payment: {
    type: String,
    required: true,
    min: 1,
    max: 1000,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  // bill: {
  //   type: Array,
  //   required: true,
  //   min: 1,
  //   max: 10000,
  // },

  // items: { item: item, qty: sl, price: giasell, totalprice: sl * giasell }
  // ,
});

const billModel = mongoose.model("bill", billSchema);
export { billModel };
