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
        type: String
    },
    likes:[Number],
    tags: String
});
resourceSchema.index({name:"text", "title":"text"});

module.exports = mongoose.model("Resource", resourceSchema);
