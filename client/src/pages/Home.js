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

      <div style={{marginTop:'70px'}}>
      {posts.map((post,index)=>(<Post id={posts[index]._id} key={index} image={posts[index].image} title={posts[index].title} author={posts[index].author} summary={posts[index].summary}/>))}

      </div>
        
      

  )
}

export default Home
