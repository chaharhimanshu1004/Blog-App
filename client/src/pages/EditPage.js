import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "../styles/Editpost.css";
import axios from 'axios';
const EditPage = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        const fetchPost = async (postId) => { 
            try {
              const response = await axios.get(`http://localhost:6004/api/users/post/${postId}`);
              setTitle(response.data.title);
              setSummary(response.data.summary);
              setContent(response.data.content);
              setFiles(response.data.image);
            } catch (error) {
              console.error('Error fetching post:', error);
            }
          };
          fetchPost(id); 
    },[id]);

    console.log(title);
    
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
            <button >Edit the  Post</button>
        </div>
       </div>
      
    </div>
  )
}

export default EditPage
