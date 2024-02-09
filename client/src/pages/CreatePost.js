import React, { useState } from 'react'
import "../styles/CreatePost.css"

const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content, setContent] = useState('');
  return (
    <div className='post'>
       <form >
        <div className='title'>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Title' />
        </div>
        <div className="summary">
            <input onChange={(e)=>setSummary(e.target.value)} value={summary} type="text" placeholder='Summary' />
        </div>
        <div className="img">
            <input  type="file" />
        </div>
        <div className="content">
            <textarea onChange={(e)=>setContent(e.target.value)}  value={content}  cols="141" rows="20"></textarea>
        </div>
        <div className="btnPost">
            <button>Create Post</button>
        </div>
       </form>
      
    </div>
  )
}

export default CreatePost
