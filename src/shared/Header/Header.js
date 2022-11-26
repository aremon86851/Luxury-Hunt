import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import { AuthProvider } from '../../AuthContext/AuthContext';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading'

const Header = () => {
    const { user, logOut } = useContext(AuthProvider)
    // const [roleUser, setRoleUser] = useState(null)
    const { data: roleUser } = useQuery({
        queryKey: ['', user?.email],
        queryFn: () => fetch(`http://localhost:5000/role?email=${user?.email}`)
            .then(res => res.json())
    })
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(err => console.error(err))
    }

    const menus = <React.Fragment>
        <li><Link to="">Home</Link></li>
        <li><Link to="">Blog</Link></li>
        {
            roleUser?.role === 'Seller' && <>
                <li><Link to="/addaproduct">Add a Product</Link></li>
                <li><Link to="/myproduct">My Product</Link></li>
                <li><Link to="/mybuyer">My Buyer</Link></li>
            </>
        }
        {
            roleUser?.role === "Buyer" && <>
                <li><Link to="/myorder">My Order</Link></li>
                <li><Link to="/mywishlist">My Wishlist</Link></li>
            </>
        }
        {
            roleUser?.role === "Admin" && <>
                <li><Link to="/myorder">All Seller</Link></li>
                <li><Link to="/myorder">All User</Link></li>
                <li><Link to="/myorder">Reported Items</Link></li>
            </>
        }
        {
            user?.uid ? <li><button className='btn text-white' onClick={handleLogOut}>Logout</button></li> : <li><Link to="/login">Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link to="" className="btn btn-ghost normal-case text-3xl font-bold"><span className='mr-1'>Luxury</span> <span className='mr-2'><FaCar className='text-4xl' /></span> <span className='text-red-600'>Hunt</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menus}
                </ul>
            </div>
        </div>
    );
};

export default Header;