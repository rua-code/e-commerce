import React from 'react'
import { LoginSchema } from '../../../validation/LoginSchema';
import * as yup from "yup";
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Container, TextField, Typography } from '@mui/material'

export default function Login() {
  const {register,handleSubmit,formState: { errors },}=useForm({resolver: yupResolver(LoginSchema),});

  const logINForm=async (values)=>{
try{
  const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values);
console.log("respons", response)
}catch(error)
{
console.log("catch error ", error)
}
  }
  return (
    <Box component={'section'} className='login-form' py={5}>
<Typography component={'h1'} variant='h1'>Log IN</Typography>

<Box component={'form'} onSubmit={handleSubmit(logINForm)} display={'flex'} flexDirection={'column'} gap={2} mt={3} justifyContent={'center'} alignItems={'center'}>
  
  <TextField {...register('email')} fullWidth label="Email" variant="outlined" error={errors.email} helperText={errors.email?.message} />
  <TextField  {...register('password')} fullWidth label="Password" variant="outlined"   error={errors.password} helperText={errors.password?.message}/>
  <Button variant="contained" type='submit' sx={{ background:"#01A49E" }} >Log in </Button>
</Box>

</Box>
  )
}
