
import './App.css';
import Header from './pages/Header';
import { useEffect } from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './slices/userSlice';
import { login } from './slices/userSlice';
import CreatePost from './pages/CreatePost';

axios.defaults.withCredentials = true;


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  
  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const parsedUser = JSON.parse(storedUser);
      dispatch(login({
        name:parsedUser.username,
        userId:parsedUser.userId,
      }))
    }
  },[dispatch])




  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/createpost' element={<CreatePost/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
