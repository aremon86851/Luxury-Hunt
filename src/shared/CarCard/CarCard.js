import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const CarCard = ({ car, setCarData }) => {
    const { user } = useContext(AuthProvider)
    const { categoryName, location, name, resalePrice, picture, salerName, _id } = car
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='w-full h-72' /></figure>
            <div className="card-body">
                <p className='italic'>{categoryName}</p>
                <h2 className="card-title"><span className='font-bold'>Car</span> : <span className='uppercase'>{name}</span></h2>
                <div>
                    <p className=''><span className='font-bold'>Seller Name :</span> <span className='italic'>{salerName}</span> </p>
                    <p><span className='font-bold'>Location : </span><span>{location}</span></p>
                    {
                        user?.uid ? <>
                            <div className="mt-5">
                                <label onClick={() => setCarData(car)} htmlFor="car-modal" className="btn btn-primary text-white">Book Now</label>
                            </div>
                        </> : <>
                            <p className='text-center italic mt-5 text-red-500'>For purchase please <Link to="/login" className='text-blue-600'>login</Link> first</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarCard;