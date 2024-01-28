const mongoose = require('monoose');
const PostSchema = new mongoose.schema({
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
        type:String,
    }
});
const Post = mongoose.model('Post',PostSchema);
module.exports = Post;
