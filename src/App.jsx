import React from 'react'
import Nav from '../Components/Nav'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    </Nav>
    </BrowserRouter>
    </>
  )
}

export default App
