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
    console.log("backendHere")
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

})
module.exports = router;
