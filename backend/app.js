const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const Resource = require("./models/Resource");
const path = require('path');
const passport = require("passport");
const authRouter = require("./routes/authRoute");
const session = require('express-session')

const app = express();

app.use(session({
  secret: 'somethingsecretgoeshere',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(authRouter);
// method GET
// endpoint /resources
// @desc: retrieves all resources
app.get("/resources", async (req, res, next) => {
    let resources = await Resource.find();
    console.log(req.user);
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
