import axios from 'axios'
import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import { Typography } from '@mui/material'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const getCategories = async () => {
        try{
            const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories')
            console.log("categories",response)
            setCategories(response.data)
        }
        catch(error){
            setError("something went wrong");
            console.log(error)

        }finally{
            setIsLoading(false)
        }
    
        
    }
   
    useEffect(() => {
            getCategories()
        }, [])
         if(isloading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
  return (
    <Box component={'section'} className='categories'>
{categories.map((category)=><Typography>{category.name}</Typography>)} // هاي من وين جاية ال categories يعني وين عرفناها 
    </Box>
  )
}
