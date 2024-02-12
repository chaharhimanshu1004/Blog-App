import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css"
import { UseSelector, useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function Header() {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegisterClick = ()=>{
    navigate('register')
  }
  const handleBlogClick = ()=>{
    navigate('/');
  }
   const handleLogout = () =>{
    localStorage.removeItem('user');

    navigate('/')
    window.location.reload();
  
   }
   const handleCreatePost = () =>{

    navigate('/createpost');

   }

  const user  = useSelector(selectUser);

  return (
    <div  className='Header'>
        <div className="top">
            <div className="heading">
              <button onClick={handleBlogClick}>MyBlog</button>
            </div>
            <div className="functions">
                { user ? <>
                      <button onClick={handleCreatePost} className='btn'>Create Post</button>
                      <button onClick={handleLogout} className='btn'>Logout</button>
                        </> 
                        :
                        <>
                        <button className='btn' onClick={handleLoginClick}>Login</button>
                        <button className='btn' onClick={handleRegisterClick}>Register</button>
                        </> 
              }
            </div>
        </div>
    </div>
  )
}




