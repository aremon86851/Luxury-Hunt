import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Header from '../../shared/Header/Header';
import Loading from '../../shared/Loading/Loading';

const Dashboard = () => {
    const { user } = useContext(AuthProvider)
    const { data: roleUser, isLoading } = useQuery({
        queryKey: ['', user?.email],
        queryFn: () => fetch(`https://luxary-hunt-server.vercel.app/role?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const menus = <React.Fragment>
        {
            roleUser?.role === 'Seller' && <>
                <li><Link to="/dashboard/addaproduct">Add a Product</Link></li>
                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                <li><Link to="/dashboard/mybuyer">My Buyer</Link></li>
            </>
        }
        {
            roleUser?.role === "Buyer" && <>
                <li><Link to="/dashboard/myorder">My Order</Link></li>
                <li><Link to="/dashboard/mywishlist">My Wishlist</Link></li>
            </>
        }
        {
            roleUser?.role === "Admin" && <>
                <li><Link to="/dashboard/allSeller">All Seller</Link></li>
                <li><Link to="/dashboard/allUser">All User</Link></li>
            </>
        }
    </React.Fragment>
    return (
        <>
            <Header></Header>
            <div className='mx-10'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawers" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content mx-5 my-5">
                        <Outlet />
                    </div>
                    <div className="drawer-side shadow-xl">
                        <label htmlFor="dashboard-drawers" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 text-base-content">
                            {menus}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;