const Resource = require("../models/Resource")

exports.getResources = async (req,res,next) =>{
    try {
        const {_id} = req.user;
        let query = Resource.find();
        // modify query
        // -----
        // execute the query
        const resources = await query;
        const 
    } catch (error) {
        
    }
}
exports.getResourceById = (req, res, next) => {
    try {
        const id = req.params.id;
        const resource = Resource.findById(id);
    } catch (error) {
        
    }
}