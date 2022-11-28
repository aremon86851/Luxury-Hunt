import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../shared/Loading/Loading';

const PaymentModal = ({ handlePaymentId, setHandlePaymentId }) => {
    const date = (new Date()).toString().split(' ').splice(1, 3).join(' ')
    const { register, handleSubmit, formState: { errors } } = useForm();
    // If want category name then want 
    // If you want use input but doing hidden that

    const { data: handlePayment } = useQuery({
        queryKey: [''],
        queryFn: () => fetch(`http://localhost:5000/payment/${handlePaymentId}`)
            .then(res => res.json())
    })
    const { carPrice, carName } = handlePayment
    console.log(handlePayment)
    const onSubmit = data => {
        console.log(data)
        setHandlePaymentId(null)

    };
    return (
        <div>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white z-50">
                    <h2 className='text-2xl mt-5 font-bold'>Please Payment!</h2>
                    <h3 className='italic my-2'>Pay $<span className='font-bold'>{carPrice}</span> for this <span className='font-bold'>{carName}</span> item</h3>
                    <label htmlFor="payment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type='text' className='input italic input-bordered w-full ' {...register("name", { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='email' className='input italic input-bordered w-full ' {...register("email", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Name</span>
                            </label>
                            <input type='text' className='input italic input-bordered w-full' {...register("carName", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Price</span>
                            </label>
                            <input type='text' className='input italic input-bordered w-full' {...register("carPrice", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Phone Number</span>
                            </label>
                            <input type='text' className='input italic input-bordered w-full' {...register("number", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Address</span>
                            </label>
                            <input type='text' className='input italic input-bordered w-full' {...register("address", { required: true })} />
                        </div>
                        {/* include validation with required or other standard HTML validation rules */}
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='btn btn-primary w-full my-5 text-white max-w-xl' type="submit" value='Book' />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default PaymentModal;