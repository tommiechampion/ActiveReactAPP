import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
       <Home/>
       </Switch>
        </div>
      </Router>
  );
}

export default App;
