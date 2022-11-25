import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookModal from '../../../shared/BookModal/BookModal';
import CarCard from '../../../shared/CarCard/CarCard';
import Loading from '../../../shared/Loading/Loading';

const HomeCars = () => {
    const [] = useState()
    const { data: allCar, isLoading } = useQuery({
        queryKey: ['homecar'],
        queryFn: () => fetch('http://localhost:5000/homecar')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-10'>
            <h1 className='text-3xl font-bold mt-7 hover:ease-out text-black uppercase'>all cars</h1>
            <div className='grid grid-cols-3 gap-10 my-10'>
                {
                    allCar.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
            <BookModal></BookModal>
        </div>
    );
};

export default HomeCars;