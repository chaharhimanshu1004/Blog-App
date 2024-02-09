import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { login } from '../slices/userSlice'
import {  useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";



export default function Login() {

  const navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();





  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6004/api/users/login",
        {
          username,
          password,
        },
      )

      if (response.data.message == `Password doesn't match`) {
        alert("Password doesnt match");
      }

      dispatch(login({
        name:username,
        userId:response.data.id,
      }));
      const userId = response.data.id;
      localStorage.setItem('user',JSON.stringify({username,userId}))
      toast.success('Successfully LoggedIn !!');
      navigate('/');


    

    } catch (err) {
      alert("Error in loggin in");
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="user">
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          value={username}
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          value={password}
          type="password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
