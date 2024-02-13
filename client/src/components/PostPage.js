import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'

const PostPage = () => {
  
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async (postId) => { 
      try {
        console.log("<<<----Trying---->>>");
        const response = await axios.get(`http://localhost:6004/post/${postId}`);
        console.log(response);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost(id); 
  },[id])


  return (
    <div>
        Hello post 
      
    </div>
  )
}

export default PostPage
