import React from 'react';

const CategoryInfo = ({ category }) => {
    const { categoryImg, categoryName } = category
    return (
        <div className="card bg-indigo-600 items-center card-side cursor-pointer shadow-xl px-5 py-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700">
            <figure><img src={categoryImg} alt="Movie" className='w-24' /></figure>
            <div className="card-body text-white">
                <h2 className="card-title font-bold text-3xl">{categoryName}</h2>
            </div>
        </div>
    );
};

export default CategoryInfo;