  import * as yup from "yup";
  
  export const LoginSchema = yup.object({
  email: yup.string().email("email must be valid").required("email is required"),
  password:yup.string().required("password is required ").min(6,"password must me at least 6 letters ").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'),

});