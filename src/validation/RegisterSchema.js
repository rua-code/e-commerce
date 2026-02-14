  import * as yup from "yup";
  
  export const registreSchema = yup.object({
  email: yup.string().email("email must be valid").required("email is required"),
  userName: yup.string().required("User Name is required ").min(3,"user name must me at least 3 letters ").matches(/^[a-zA-Z0-9]+$/, 'User name must be alphanumeric'),
  fullName:yup.string().required("Full Name is required"),
  password:yup.string().required("password is required ").min(6,"password must me at least 6 letters ").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'),
phoneNumber:yup.string().required("phone number is required").matches(/^[0-9]{8}$/, 'Phone number must be 8 digits'),
 
});