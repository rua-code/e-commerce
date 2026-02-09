import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Home from "./pages/home/home";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<Home/>

        },
        {
            path:'cart',
            element:<Cart/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        }
    ]
    }
])

export default router;