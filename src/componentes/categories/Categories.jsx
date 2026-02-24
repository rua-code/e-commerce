import axios from 'axios'
import React, { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Typography } from '@mui/material'
import useCategories from '../../hook/useCategories'

export default function Categories() {
const {data,isLoading,isError,error}=useCategories();

        if(isLoading){return <CircularProgress/>};
        if(isError){return <Typography>{error.message}</Typography>};

  return (
    <Box component={'section'} className='categories'>
      
{data.response.map((category)=><Typography>{category.name}</Typography>)} 
<h1>Categories</h1>
    </Box>
  )
}
