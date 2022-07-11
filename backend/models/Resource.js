const mongoose = require("mongoose");
const resourceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    field:{
        type: String,
        required: true
    },
    content: [{type: Object}],
    owner: {
        type: Object
    },
    likes:Object,
    tags: String,
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false 
    }
});
resourceSchema.index({name:"text", "title":"text"});

module.exports = mongoose.model("Resource", resourceSchema);
