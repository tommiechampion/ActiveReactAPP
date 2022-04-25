import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    < BrowserRouter>
      <Topbar/>
      <div className="container">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path='/' 
        element={<Home/>}/>
       </Routes>
       <Routes>
          <Route path='/users' element={<UserList/>}/>
       </Routes>
      
       
        </div>
      </ BrowserRouter>
  );
}

export default App;
