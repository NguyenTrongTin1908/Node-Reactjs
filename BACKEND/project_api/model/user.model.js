import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    min: 1,
    max: 100,
    text: true,
  },
  password: {
    type: String,
  },
});
