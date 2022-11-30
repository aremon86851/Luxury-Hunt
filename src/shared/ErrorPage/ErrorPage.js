import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center mt-16'>
            <div className='text-center'>
                <h2 className='text-2xl mb-3'>This page is not found please  or go to home page</h2>
                <Link to="/"><button className='btn btn-primary my-5'>Home Page</button></Link>
                <div className='flex justify-center'>
                    <img src="https://i.ibb.co/zsMLzhb/404-fee4b60b.png" alt="" srcset="" className='w-48' />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;