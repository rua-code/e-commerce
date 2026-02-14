import React from 'react'
import Navbar from'../componentes/navbar/Navbar.jsx'
import Footer from '../componentes/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export default function MainLayout() {
  return (
   <>
<Navbar/>
<Container>
<Outlet />
</Container>

<Footer />
   </>
  )
}
