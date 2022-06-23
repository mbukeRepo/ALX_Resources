const express = require("express");
const session = require('express-session');
const cors = require('cors');
const mongoose = require("mongoose");
const Resource = require("./models/Resource");
const path = require('path');
const GitHubStrategy = require('passport-github').Strategy;
const passport = require("passport");
const dotenv = require('dotenv');

const app = express();
dotenv.config({path: "./config.env"});
const {CLIENTID, CLIENT_SECRET} = process.env;

app.use(
  session({
    secret: "your secrete",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(express.json());
app.use(cors());
//app.use((req, res, next) => {
//  console.log(req.user);
//  next();
//});

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  cb(null, id);
});
// auth middleware 
passport.use(
new GitHubStrategy({
    clientID: CLIENTID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    cb(null, profile)
  }
)
);

app.get('/auth/github',(req, res, next) => {
  console.log("authenticating...")
  next();
},
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', {
    successRedirect: "http://localhost:3000/", 
  })
);

// method GET
// endpoint /resources
// @desc: retrieves all resources
app.get("/resources", async (req, res, next) => {
    let resources = await Resource.find();
    console.log(req);
    if(req.query.search){
        resources = await Resource.find({$title:{$search: req.query.search}});
    }
    res.json(resources)
})

// method GET
// endpoint /resouces/:id
// @desc: retrieves resource by id
app.get("/resources/:id", async (req, res, next) => {
    let resource = await Resource.findById(req.params.id);
    res.json(resource);
})

// method POST
// endpoint /resources
// @desc: creates new resource
app.post("/resources", async (req, res, next) => {
    await Resource.create(req.body);
    res.json({status:"success", message:"new resource is created"});
});

// serving the frontend
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



mongoose.connect("mongodb://localhost:27017/alxResources")
.then(() => {
    console.log("connected to the database")
    app.listen(5000, console.log("app running on port + " + 5000));
})
