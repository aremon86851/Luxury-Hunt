import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookModal from '../../shared/BookModal/BookModal';
import Loading from '../../shared/Loading/Loading';
import MyOrderCard from '../MyOrder/MyOrderCard/MyOrderCard';
import MyWishlistItem from './MyWishlistItem/MyWishlistItem';

const MyWishlist = () => {
    const [handlePaymentId, setHandlePaymentId] = useState(null)
    const { data: wishlistItems, isLoading } = useQuery({
        queryKey: ['wishlistItems'],
        queryFn: () => fetch('http://localhost:5000/wishlistItem')
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
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>E-mail</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlistItems.map((item, i) => <MyWishlistItem setHandlePaymentId={setHandlePaymentId} item={item} i={i}></MyWishlistItem>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {
                    handlePaymentId && <>
                        <BookModal carData={handlePaymentId} setCarData={setHandlePaymentId}></BookModal>
                    </>
                }
            </div>
        </div>
    );
};

export default MyWishlist;