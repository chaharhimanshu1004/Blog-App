
import './App.css';
import Header from './pages/Header';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
