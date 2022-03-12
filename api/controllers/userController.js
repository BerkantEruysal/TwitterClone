const User = require("../models/user");
const bcrypt = require("bcrypt");
const sessionToken = require("../models/sessionToken");
const crypto = require("crypto");



exports.createUser = async function (req, res, next) {
    if(!req.body.username || !req.body.password){
        res.status(400).send("Bad Request");
        return
    }

    if(await User.findOne({username : req.body.username}).exec() != null){
        res.status(409).send("Username Already Exists")
        return
    }
  


  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const createdUser = new User({
    username: req.body.username,
    password: hashedPassword,
    roles: ["user"],
  });
  createdUser.save().then(() => {
      let expires = new Date()
      expires.setHours(expires.getHours() + 10)
      console.log(expires)
    const session = new sessionToken({
      value: crypto.randomBytes(64).toString("hex"),
      user: createdUser._id,
      expires : expires
    });
    session.save()
    res.status(200).json({
        created : true,
        sessionToken : session.value
    })
    
  });
  
};

