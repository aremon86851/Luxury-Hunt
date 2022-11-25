import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from '../../shared/CarCard/CarCard';

const CategoryCar = () => {
    const allCars = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 my-10'>
                {
                    allCars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCar;