import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

export default function Register() {

  let registreSchema = yup.object({
  email: yup.string().email("email must be valid").required("email is required"),
  userName: yup.string().required("User Name is required ").min(3,"user name must me at least 3 letters ").matches(/^[a-zA-Z0-9]+$/, 'User name must be alphanumeric'),
  fullName:yup.string().required("Full Name is required"),
  password:yup.string().required("password is required ").min(6,"password must me at least 6 letters ").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'),
phoneNumber:yup.string().required("phone number is required").matches(/^[0-9]{8}$/, 'Phone number must be 8 digits'),
 
});

  const {register,handleSubmit,formState: { errors },}=useForm({resolver: yupResolver(registreSchema),});

  const registerForm=async (values)=>{
try{
  const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
console.log("respons", response)
}catch(error)
{
console.log("catch error ", error)
}
  }
  return (
<Box component={'section'} className='register-form' py={5}>
<Typography component={'h1'} variant='h1'>Register</Typography>

<Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} gap={2} mt={3} justifyContent={'center'} alignItems={'center'}>
  
  <TextField {...register('email')} fullWidth label="Email" variant="outlined" error={errors.email} helperText={errors.email?.message} />
   
  <TextField  {...register('userName')} fullWidth label="User Name" variant="outlined"  error={errors.userName} helperText={errors.userName?.message}/>
  <TextField {...register('fullName')}  fullWidth label="full Name" variant="outlined"  error={errors.fullName} helperText={errors.fullName?.message}/>
  <TextField  {...register('password')} fullWidth label="Password" variant="outlined"   error={errors.password} helperText={errors.password?.message}/>
  <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="outlined"  error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />
  <Button variant="contained" type='submit' sx={{ background:"#01A49E" }} >Register </Button>
</Box>

</Box>
  )
}
