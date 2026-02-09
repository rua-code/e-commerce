import React from 'react'
import Navbar from '../componentes/navbar/navbar'
import Footer from '../componentes/footer/footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   <>
<Navbar />
<Outlet />
<Footer />
   </>
  )
}
