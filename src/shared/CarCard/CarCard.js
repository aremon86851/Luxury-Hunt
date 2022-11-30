import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const CarCard = ({ car, setCarData }) => {
    const { user } = useContext(AuthProvider)
    const [disabled, setDisabled] = useState(false)
    const { postDate, location, name, resalePrice, picture, sellerName, _id, originalPrice, yearsOfUse, status } = car;
    console.log(car)
    const handleWishlist = id => {
        fetch(`http://localhost:5000/wishlist/${id}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDisabled(true)
                    toast.success('Wish listed successfully!')
                }
            })
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" className='w-full h-72' /></figure>
            <div className="card-body">
                <p className='italic'>{postDate}</p>
                <h2 className="card-title"><span className='font-bold'>Car</span> : <span className='uppercase'>{name}</span></h2>
                <div>
                    <p className=''><span className='font-bold'>Seller Name :</span> <span className='italic'>{sellerName}</span><span>
                        {
                            status === 'verified' && <svg style={{ color: "blue" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="blue"></path> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="blue"></path> </svg>
                        }
                    </span> </p>
                    <p><span className='font-bold'>Location : </span><span>{location}</span></p>
                    <p><span className='font-bold'>Year of Use : </span><span>{yearsOfUse}</span></p>
                    <p><span className='font-bold'>Resale Price : </span><span>{resalePrice}</span></p>
                    <p><span className='font-bold'>Original Price : </span><span>{originalPrice}</span></p>
                    {
                        user?.uid ? <>
                            <div className="mt-5">
                                <label onClick={() => setCarData(car)} htmlFor="car-modal" className="w-full btn btn-primary text-white mb-3">Book Now</label>
                                <label onClick={() => handleWishlist(_id)} className="w-full btn btn-success text-white" disabled={disabled}>Wishlist</label>
                            </div>
                        </> : <>
                            <p className=' italic mt-5 text-red-500'>For purchase please <Link to="/login" className='text-blue-600'>login</Link> first</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarCard;