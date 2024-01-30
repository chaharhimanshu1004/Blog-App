import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const handleRegister = async(e) =>{
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:6004/api/users/register',{
          username,
          password
        })
        console.log(response);

      }catch(err){
       alert('Username is already taken')
      }

    }

    return (
      <div className='login'>
        <div className="user">
          <input onChange={(e)=>setUsername(e.target.value)} placeholder='username' value={username} type="text" />
          <input onChange={(e)=>setPassword(e.target.value)} placeholder='password' value={password} type="password" />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    )
}
