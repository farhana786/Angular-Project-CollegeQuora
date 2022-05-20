const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, require:true},
    content: { type: String, require:false },
    creator:{ type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    name:{type: mongoose.Schema.Types.String,ref:"User",require:false}
});

module.exports = mongoose.model('Post', postSchema); 