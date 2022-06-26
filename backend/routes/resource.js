const router = require("express").Router();
// method GET
// endpoint /resources
// @desc: retrieves all resources
router.get("/resources", async (req, res, next) => {
    let resources = await Resource.find();
    if(req.query.search){
        resources = await Resource.find({$title:{$search: req.query.search}});
    }
    res.json(resources)
})

// method GET
// endpoint /resouces/:id
// @desc: retrieves resource by id
router.get("/resources/:id", async (req, res, next) => {
    let resource = await Resource.findById(req.params.id);
    res.json(resource);
})

// method POST
// endpoint /resources
// @desc: creates new resource
router.post("/resources", async (req, res, next) => {
    await Resource.create(req.body);
    res.json({status:"success", message:"new resource is created"});
});

