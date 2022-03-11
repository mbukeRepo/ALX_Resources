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
    content: [{type: Object}]
});


module.exports = mongoose.model("Resource", resourceSchema);