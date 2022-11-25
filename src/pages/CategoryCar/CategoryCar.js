import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../shared/BookModal/BookModal';
import CarCard from '../../shared/CarCard/CarCard';

const CategoryCar = () => {
    const [carData, setCarData] = useState('')
    const allCars = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 my-10'>
                {
                    allCars.map(car => <CarCard key={car._id} car={car} setCarData={setCarData}></CarCard>)
                }
            </div>
            {
                carData && <>
                    <BookModal carData={carData}
                        setCarData={setCarData}></BookModal>
                </>
            }
        </div>
    );
};

export default CategoryCar;