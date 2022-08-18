import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import RenderDetail from './detail/RenderDetail'

export default function RouterPages() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pet-detail' element={<RenderDetail/>} />
        </Routes>
     </Router>
  )
}
