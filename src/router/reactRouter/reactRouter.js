import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import CategoryInfo from "../../pages/Home/Category/CategoryInfo/CategoryInfo";
import CategoryCar from "../../pages/CategoryCar/CategoryCar";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddaProduct from "../../pages/AddaProduct/AddaProduct";
import MyProduct from "../../pages/MyProduct/MyProduct";
import MyBuyer from "../../pages/MyBuyer/MyBuyer";
import MyOrder from "../../pages/MyOrder/MyOrder";
import MyWishlist from "../../pages/MyWishlist/MyWishlist";
import Dashboard from "../../layout/Dashboard/Dashboard";
import PaymentPage from "../../pages/MyOrder/PaymentPage/PaymentPage";
import AllSeller from "../../pages/AllSeller/AllSeller";
import AllUser from "../../pages/AllUser/AllUser";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <CategoryInfo></CategoryInfo>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryCar></CategoryCar></PrivateRoute>,
                loader: ({ params }) => fetch(`https://luxary-hunt-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddaProduct></AddaProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/mybuyer',
                element: <MyBuyer></MyBuyer>
            },
            {
                path: '/dashboard/mywishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PaymentPage></PaymentPage>,
                loader: ({ params }) => fetch(`https://luxary-hunt-server.vercel.app/payment/${params.id}`)
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            }
        ]
    }
])

export default router