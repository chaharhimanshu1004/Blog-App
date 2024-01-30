import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css"


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

  return (
    <div  className='Header'>
        <div className="top">
            <div className="heading">
              <button onClick={handleBlogClick}>MyBlog</button>
            </div>
            <div className="functions">
                <button className='btn' onClick={handleLoginClick}>Login</button>
                <button className='btn' onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    </div>
  )
}




