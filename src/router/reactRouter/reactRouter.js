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

const router = createBrowserRouter([
    {
        path: '/',
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
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
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
                path: '/addaproduct',
                element: <AddaProduct></AddaProduct>
            },
            {
                path: '/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/mybuyer',
                element: <MyBuyer></MyBuyer>
            },
            {
                path: '/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/mywishlist',
                element: <MyWishlist></MyWishlist>
            }
        ]
    }
])

export default router