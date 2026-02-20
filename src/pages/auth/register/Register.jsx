import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { registreSchema } from '../../../validation/RegisterSchema';

export default function Register() {
  const [serverErrors, setServerErrors] = React.useState([]);



  const {register,handleSubmit,formState: { errors },isSubmitting}=useForm({resolver: yupResolver(registreSchema),mode:"onChange"});

  const registerForm=async (values)=>{
try{
  const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
console.log("respons", response)
}catch(error)
{
  setServerErrors(error.response.data.errors)
console.log("catch error ", error)
}
  }
  return (
<Box component={'section'} className='register-form' py={5}>
<Typography component={'h1'} variant='h1'>Register</Typography>
{serverErrors.length >0 &&(
 <Box sx={{color:"red"}}>
  {serverErrors.map((error)=><Typography>{error}</Typography>)}
  </Box>

)}

<Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} gap={2} mt={3} justifyContent={'center'} alignItems={'center'}>
  
  <TextField {...register('email')} fullWidth label="Email" variant="outlined" error={errors.email} helperText={errors.email?.message} />
   
  <TextField  {...register('userName')} fullWidth label="User Name" variant="outlined"  error={errors.userName} helperText={errors.userName?.message}/>
  <TextField {...register('fullName')}  fullWidth label="full Name" variant="outlined"  error={errors.fullName} helperText={errors.fullName?.message}/>
  <TextField  {...register('password')} fullWidth label="Password" variant="outlined"   error={errors.password} helperText={errors.password?.message}/>
  <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="outlined"  error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />
    <Button variant="contained" type='submit' sx={{ background:"#01A49E" }} disabled={isSubmitting}>{isSubmitting ? <CircularProgress/> : ' ' }</Button>

</Box>

</Box>
  )
}
