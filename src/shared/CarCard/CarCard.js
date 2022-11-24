import React from 'react';

const CarCard = ({ car }) => {
    console.log(car)
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
                    <div className="mt-5">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;