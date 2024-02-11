const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    summary:{
        type:String,
    },
    content:{
        type:String,
    },
    image:{
        type:String,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
});
const Post = mongoose.model('Post',PostSchema);
module.exports = Post;
