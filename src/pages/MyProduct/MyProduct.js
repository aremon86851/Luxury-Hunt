import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Loading from '../../shared/Loading/Loading';
import MyProductRow from './MyProductRow/MyProductRow';

const MyProduct = () => {
    const { user } = useContext(AuthProvider)
    const { data: myProdcuts, isLoading, refetch } = useQuery({
        queryKey: ['myProdcuts', user?.email],
        queryFn: () => fetch(`https://luxary-hunt-server.vercel.app/sellerProduct?email=${user?.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Image</th>
                        <th>Car Name</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myProdcuts.map((product, i) => <MyProductRow key={i} refetch={refetch} product={product} i={i}></MyProductRow>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyProduct;