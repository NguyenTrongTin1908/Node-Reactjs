import userService from "../services/userService.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import mongodb from "mongoose";

// connect mongodb

await mongodb.connect("mongodb://localhost:27017/local", {});
import { userModel } from "../model/user.model.js";

let handleRegister = async (request, response) => {
  // const { error } = registerValidator(request.body);

  // if (error) return response.status(422).send(error.details[0].message);

  console.log("REQ", request.body.email);

  const checkEmailExist = await userModel.findOne({
    email: request.body.email,
  });

  if (checkEmailExist) return response.status(422).send("Email is exist");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(request.body.password, salt);

  const user = new userModel({
    email: request.body.email,
    password: hashPassword,
  });

  try {
    const newUser = await user.save();
    await response.send(newUser);
    // return response.status(200).json({
    //   errCode: 3,
    //   userData: email,
    // });
  } catch (err) {
    response.status(400);
  }
};

let handleLogin = async (req, res) => {
  let email = "";
  let password = "";
  if (req.body.email && req.body.password) {
    email = req.body.email;
    password = req.body.password;
  }
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    userData: userData.user,
  });
};

// let handleLogin = async (request, response) => {
//   let email = "";
//   let password = "";
//   if (request.body.email && request.body.password) {
//     email = request.body.email;
//     password = request.body.password;
//   }
//   if (!email || !password) {
//     return res.status(500).json({
//       errCode: 1,
//       message: "Missing input parameter!",
//     });
//   }

//   let userData = await userService.handleUserLogin(email, password);

//   return res.status(200).json({
//     errCode: userData.errCode,
//     message: userData.errMessage,
//     userData: userData.data,
//   });
// };

export default {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
};
