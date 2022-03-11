const express = require("express");
const cors = require('cors');
const req = require("express/lib/request");
const mongoose = require("mongoose");
const Resource = require("./models/Resource");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/resources", async (req, res, next) => {
    let resources = await Resource.find();
    if(req.query.search){
        resources = await Resource.find({$title:{$search: req.query.search}});
    }
    res.json(resources)
})

app.get("/resources/:id", async (req, res, next) => {
    let resource = await Resource.findById(req.params.id);
    res.json(resource);
})

app.post("/resources", async (req, res, next) => {
    await Resource.create(req.body)
    res.json({status:"success", message:"new resource is created"});
});
// app.delete("/resources/:id", async (req, res, next) => {

// });



mongoose.connect("mongodb://localhost:27017/alxResources")
.then(() => {
    console.log("connected to the database")
    app.listen(5000, console.log("app running on port + " + 5000));
})
