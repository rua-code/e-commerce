import axios from 'axios'
import { Box, CircularProgress } from '@mui/material'
import { Typography } from '@mui/material'
import useCategories from '../../hook/useCategories'

export default function Categories() {
const {data,isLoading,isError,error}=useCategories();

        if(isLoading){return <CircularProgress/>};
        if(isError){return <Typography>{error.message}</Typography>};

  return (
    <Box component={'section'} className='categories'>
      
{data.response.data.map(category=><Typography>{category.name}</Typography>)} 
<h1>Categories</h1>
    </Box>
  )
}
