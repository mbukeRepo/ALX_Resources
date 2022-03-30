const User = require("../models/User");
const {jwtSecret} = require("../utils/env_variables");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {promisify}  = require("util")

exports.signup = async (res, req, next ) => {
try{
   let {username, email, password} = req.body;
   if (!username || !email || !password){
       return res.status(400).json({
           status: "failed",
           message: "enter all fields"
       });
   }
   // hashing the password
   password = await bcrypt.hash(password, 12);
   const user = await User.create({username,password,email});
   const token = jwt.sign({id: user._id},jwtSecret, {expiresIn: "10d"});
   return res.status(201).json({
       status: "success",
       data: {
           user,
           token
        }
   })
}catch(e){
       return next(e);
}
}
exports.login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json("username and password required");
        }
        const user = await User.findOne({username});
        if (!user || bcrypt.compare(password, user.password)){
            return res.status(400).json({
                status: "failed", 
                message: "invalid username or password"
            })
        }
        const token = jwt.sign({id: user._id},jwtSecret, {expiresIn: "10d"});
        return res.status(200).json({
            status: "success",
            data: {
                user,
                token
        }});

    } catch (error) {
        return next(error);
    }
}

exports.protect = (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token){
            return res.status(401).json({
                status: "failed",
                message: "You are not authorized"
            })
        }
        const {id} = await promisify(jwt.verify)(token,jwtSecret);
        const currentUser = await User.findById(id);
        if (!currentUser){
            return res.status(401).json({
                status: "failed",
                message: "Sorry user does'nt exists."
            })
        }
        req.user = currentUser;
        next();

    } catch (error) {
        return next(error)
    }
}