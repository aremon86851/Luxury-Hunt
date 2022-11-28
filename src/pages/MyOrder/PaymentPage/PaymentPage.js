import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';


const stripePromise = loadStripe(`pk_test_51M91mJJ6IELq2rYrU75F3tby1AHcEVgz9ylMRkoPl7QnntLvq8uTNMeXa8keDFTAK12onFH8wZFpefkLBtzcnh7z00QvNRDEeN`)

const PaymentPage = () => {
    const data = useLoaderData()
    console.log(stripePromise)
    const { carName, carPrice } = data

    return (
        <div>
            <div className='mb-10'>
                {
                    data && <>
                        <h2 className='text-2xl font-bold'>Please Payment!</h2>
                        <h3 className='italic'>Pay $<span className='font-bold'>{carPrice}</span> for this <span className='font-bold'>{carName}</span> Item</h3>
                    </>
                }
            </div>
            <div className='w-96 shadow-xl p-5'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        data={data}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;