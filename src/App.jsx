import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Brand from './Pages/Brand'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'


const App = () => {
  return (

    <div className="flex flex-col min-h-screen">
      <Header />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Brand' element={<Brand />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>

  )
}

export default App