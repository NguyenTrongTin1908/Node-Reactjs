import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
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

    address: {
      type: String,
    },

    phone: {
      type: Number,
    },
  },
  {
    collection: "user",
  }
);

const userModel = mongoose.model("user", userSchema);
export { userModel };
