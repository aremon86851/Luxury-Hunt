import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Loading from '../../shared/Loading/Loading';

const MyOrder = () => {
    const { user } = useContext(AuthProvider)
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(orders)
    return (
        <div>
            This is my order
        </div>
    );
};

export default MyOrder;