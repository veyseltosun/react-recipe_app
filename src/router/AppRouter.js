import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "../pages/about/About"
import Home from "../pages/home/Home"
import Details from "../pages/details/Details"
import Login from "../pages/login/Login"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/' element={<Home/>}/>

        
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter