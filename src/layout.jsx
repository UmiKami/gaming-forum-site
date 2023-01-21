import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import PageNotFound from './Views/PageNotFound'
import Navbar from './Components/Navbar'

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
  return (
      <main className='tw-h-screen tw-bg-[#123344]'>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </main>
  );
}

export default Layout