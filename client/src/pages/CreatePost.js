import React, { useState } from 'react'
import "../styles/CreatePost.css"
import axios from 'axios'

const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files,setFiles] = useState('');
    
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        try{
            const data = new FormData();
            data.set('title',title);
            data.set('summary',summary);
            data.set('content',content);
            data.set('file',files[0]);
            const response = await axios.post('http://localhost:6004/api/users/createPost',
                data ,
            );
            console.log(response);

        }catch(err){
            console.log(err);
            console.log('error occurs')
        }
    }

  return (
    <div className='post'>
       <div >
        <div className='title'>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Title' />
        </div>
        <div className="summary">
            <input onChange={(e)=>setSummary(e.target.value)} value={summary} type="text" placeholder='Summary' />
        </div>
        <div className="img">
            <input onChange={(e)=>setFiles(e.target.files)} type="file" />
        </div>
        <div className="content">
            <textarea onChange={(e)=>setContent(e.target.value)}  value={content}  cols="141" rows="20"></textarea>
        </div>
        <div className="btnPost">
            <button onClick={handleFormSubmit}>Create Post</button>
        </div>
       </div>
      
    </div>
  )
}

export default CreatePost
