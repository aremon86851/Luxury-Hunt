import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Loading from '../../shared/Loading/Loading';
import MyOrderCard from './MyOrderCard/MyOrderCard';
import PaymentPage from './PaymentPage/PaymentPage';

const MyOrder = () => {
    const [handlePaymentId, setHandlePaymentId] = useState(null)

    console.log(handlePaymentId);
    const { user } = useContext(AuthProvider);
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Image</th>
                            <th>Order Name</th>
                            <th>Price</th>
                            <th>E-mail</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <>
                                <MyOrderCard key={order._id} i={i} order={order} setHandlePaymentId={setHandlePaymentId}></MyOrderCard>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </div>
    );
};

export default MyOrder;