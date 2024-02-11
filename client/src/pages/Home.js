import React, { useEffect } from 'react'
import Post from '../components/Post'
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get('http://localhost:6004/api/users/getposts');
            setPosts(response.data);
        }
        fetchData();
    },[]);
    console.log(posts)


  return (
    <div>
        {posts.map((post,index)=>(<Post image={posts[index].image} title={posts[index].title} summary={posts[index].summary}/>))}
        
      
    </div>
  )
}

export default Home
