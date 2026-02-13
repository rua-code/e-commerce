import React from 'react'
import Navbar from'../componentes/navbar/Navbar.jsx'
import Footer from '../componentes/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   <>
<Navbar/>
<Outlet />
<Footer />
   </>
  )
}
