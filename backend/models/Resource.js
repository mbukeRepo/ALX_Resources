const mongoose = require("mongoose");
const {SchemaTypes} = mongoose;
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
        type: SchemaTypes.ObjectId,
        ref: "User"
    },
    likes:[SchemaTypes.ObjectId],
    tags: String
});


module.exports = mongoose.model("Resource", resourceSchema);
