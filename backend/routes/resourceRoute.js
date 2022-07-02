const router = require("express").Router();
const Resource = require("../models/Resource");

// method GET
// endpoint /resources
// @desc: retrieves all resources
router.get("/resources", async (req, res, next) => {
    let resources = Resource.find();
    if (req.query.search){
        const capitalized = req.query.search.charAt(0).toUpperCase() + req.query.search.slice(1);
        resources = resources.find({
            $or: [
                {title: {$regex: req.query.search}}, 
                {field: {$regex: req.query.search}},
                {title: {$regex: capitalized}},
                {field: {$regex: capitalized}}
            ]
        });
    }
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const pages = resources.length / limit;
    const skip = (page -1 ) * limit;
    resources = resources.skip(skip).limit(limit);
    resources = await resources;

    res.json({
        pages,
        resources
    });
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

module.exports = router;
