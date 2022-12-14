import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ data }) => {
    const [cardError, setCardError] = useState('')
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { carPrice, email, name, _id, bookedCarId } = data

    const price = {
        carPrice: carPrice
    }

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://luxary-hunt-server.vercel.app/createpaymentintent", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(price),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                console.log(data.clientSecret)
            });
    }, [carPrice]);
    const handlePayment = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            console.log(error)
        }
        else {
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                name: name,
                email: email,
                price: carPrice,
                bookedCarId: bookedCarId,
                transactionId: paymentIntent.id,
            }
            fetch('https://luxary-hunt-server.vercel.app/paymentSuccess', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        fetch(`https://luxary-hunt-server.vercel.app/paymentSuccess/${bookedCarId}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                        toast.success('Payment successfully !')
                        navigate('/')
                    }
                })
        }

        console.log(paymentIntent)

    }
    return (
        <>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-small mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
        </>
    );
};

export default CheckOutForm;