import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../shared/Loading/Loading';
import CategoryInfo from './CategoryInfo/CategoryInfo';

const Category = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('http://localhost:5000/category')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-10'>
            <div>
                <h1 className='text-3xl font-bold mt-7 hover:ease-out text-black uppercase'>Select Category</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 my-10'>
                {
                    categories.map(category => <CategoryInfo key={category._id} category={category}></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default Category;