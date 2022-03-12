var express = require('express');
var router = express.Router();
const {createUser} = require("../controllers/userController")


router.get('/', function(req, res, next) {
  res.send("deneme")
});

router.post("/create" , createUser)

module.exports = router;
