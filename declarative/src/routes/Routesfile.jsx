import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'

const Routesfile = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} >
         <Route path='detail' element={<Detail />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routesfile