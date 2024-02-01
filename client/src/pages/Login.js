import React from 'react'
import '../styles/Login.css'
import { useState } from 'react'
import axios from 'axios'
// import { login } from '../slices/userSlice'
import {useDispatch} from 'react-redux'


export default function Login()  {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleLogin = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:6004/api/users/login',{
      username,
      password,
    })
    console.log("Response headers",response.headers)

    const setCookieHeader = response.headers['set-cookie'];
    console.log("If have",setCookieHeader)
    if (setCookieHeader) {
      // Parse and access cookie values if needed
      console.log('Set-Cookie Header:', setCookieHeader);
    }
    if(response.data.message == `Password doesn't match`){
      alert('Password doesnt match')
    }
    console.log(response);
    alert('LoggedIn')

    }catch(err){
      alert('Error in loggin in')
      console.log(err);
    }
  }

  return (
    <div className='login'>
      <div className="user">
        <input onChange={(e)=>setUsername(e.target.value)} placeholder='username' value={username} type="text" />
        <input onChange={(e)=>setPassword(e.target.value)} placeholder='password' value={password} type="password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
