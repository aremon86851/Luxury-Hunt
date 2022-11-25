import React from 'react';
import { Link } from 'react-router-dom';

const CategoryInfo = ({ category }) => {
    const { categoryImg, categoryName, _id } = category
    return (
        <Link to={`/category/${_id}`}>
            <div className="card h-32 bg-indigo-600 items-center card-side cursor-pointer shadow-xl px-5 py-5 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700">
                <figure><img src={categoryImg} alt="Movie" className='w-24' /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title font-bold text-3xl">{categoryName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoryInfo;