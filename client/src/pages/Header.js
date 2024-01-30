import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css"


export default function Header() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div  className='Header'>
        <div className="top">
            <div className="heading">MyBlog</div>
            <div className="functions">
                <button className='btn' onClick={handleLoginClick}>Login</button>
                <button className='btn'>Register</button>
            </div>
        </div>
    </div>
  )
}




