import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Languages from "./TruckingIndustry";

class App extends React.Component{
  render(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/truckingindustry/:truckingindustryid" element={<Languages/>} />
          </Routes>
        </BrowserRouter>
    );
  }
}
export default App;