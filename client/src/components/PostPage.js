import React, { useEffect,useState } from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "../styles/PostPage.css";

const PostPage = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [post, setPost] = useState([]);





  useEffect(() => {
    const fetchPost = async (postId) => { 
      try {
        const response = await axios.get(`http://localhost:6004/api/users/post/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost(id); 
  },[id])

  





  return (
    <div>
      <div className="user">
        {post.author && <h2> Created by - {post.author.username} </h2>}
      </div>
      <Link to={`/edit/${id}`} >
      <div className="edit">
        {post.author?._id === user?.user?.userId && <h3> Edit Post  <FaEdit />
        </h3>
        }
        </div>
        </Link>
      
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="postImage">
      <img src={"http://localhost:6004/" + post.image} alt="Image" />
      </div>
      <div className="content">
        <h4>{post.content}</h4>
        <p className="contentAuthor">
        </p>
      </div>


        
      
    </div>
  )
}

export default PostPage
