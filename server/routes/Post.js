const express = require('express')
const jwt = require('jsonwebtoken');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const router = express.Router();
const postModel = require('../modals/Post')
require('dotenv').config();

router.post('/createPost',uploadMiddleware.single('file'), async(req, res) => {
   try{
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
    const token = req.cookies.token;
    jwt.verify(token,process.env.secret,{},async(err,info)=>{
        if(err)throw err
        const {title,summary,content} = req.body;
        const newPost = new postModel({
            title,
            summary,
            content,
            image:newPath,
            author: info.id
        })
        await newPost.save();
        res.status(200).json(newPost);
        
    })
    
    


   }catch(err){
    console.log('Error while creating Post');
    console.log(err);
   }

});
router.get('/getposts',async(req,res)=>{
   const posts=await postModel.find().populate('author', ['username']).sort({createdAt: -1}).limit(20);
   
   res.status(200).json(posts);

});

router.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        console.log('Fetching post with ID:', id);
        const post = await postModel.findById(id).populate('author', ['username']);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {
        console.error('Error while fetching the post:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/post',uploadMiddleware.single('file'), async (req, res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
    const {token} = req.cookies;
    jwt.verify(token, process.env.secret, {}, async (err,info) => {
        if (err) throw err;
        const {id,title,summary,content} = req.body;
        const postDoc = await Post.findById(id);

        await postDoc.update({
          title,
          summary,
          content,
          cover: newPath ? newPath : postDoc.cover,
        });
    
        res.json(postDoc);
      });
  
});
module.exports = router;
