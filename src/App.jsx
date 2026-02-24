import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export default function App() {
// متغير يخزن حالة الداتا 
  const queryClient = new QueryClient() //state manager 
  
  return (
    // كل الcomponents رح تشوف queryClient
<QueryClientProvider client={queryClient}>
  <RouterProvider router={router} /> 
</QueryClientProvider>
 
  )
}
