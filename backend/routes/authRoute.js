const GitHubStrategy = require('passport-github').Strategy;
const passport = require("passport");
const dotenv = require('dotenv');
const router = require("express").Router();


dotenv.config({path: "./config.env"});
const {CLIENTID, CLIENT_SECRET} = process.env;

// passport configuration
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// auth middleware 
passport.use(
   new GitHubStrategy({
     clientID: CLIENTID,
     clientSecret: CLIENT_SECRET,
     callbackURL: "http://localhost:5000/auth/github/callback"
   },
   function(accessToken, refreshToken, profile, cb) {
     cb(null, profile)
   }
)
);


router.get('/auth/github',
  passport.authenticate('github', {scope: ["profile"]}));

router.get('/auth/github/callback', 
  passport.authenticate('github', {
    successRedirect: "http://localhost:3000/", 
  })
);

// method => GET
// @desc: gets information about user if loggedin
route.get('/auth/login/success', (req, res, next) => {
   if(req.user){
     return res.json({
       success: true,
       user:req.user,
       isLoggedIn:true
     })
   }
   return res.json({
     success: false,
     isLoggedIn: false
   })
});
module.exports = router;
