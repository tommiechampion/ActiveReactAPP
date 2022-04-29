import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';



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
       <Routes>
          <Route path='/user/:userId' element={<User/>}/>
       </Routes>
       <Routes>
          <Route path='/newUser' element={<NewUser/>}/>
       </Routes>
       <Routes>
          <Route path='/products' element={<ProductList/>}/>
       </Routes>
       <Routes>
          <Route path='/product/:productsId' element={<User/>}/>
       </Routes>
       <Routes>
          <Route path='/newproduct' element={<NewUser/>}/>
       </Routes>
       
        </div>
      </ BrowserRouter>
  );
}

export default App;
