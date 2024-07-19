import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin.jsx'
import Signout from './pages/Signup.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signout />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App