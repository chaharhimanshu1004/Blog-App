
import './App.css';
import Header from './pages/Header';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
