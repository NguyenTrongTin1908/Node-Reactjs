let handleLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  return res.status(200).json({
    message: "Hello",
  });
};

module.exports = {
  handleLogin: handleLogin,
};
