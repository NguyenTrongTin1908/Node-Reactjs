var express = require('express');
var router = express.Router();

const user_router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = user_router;
