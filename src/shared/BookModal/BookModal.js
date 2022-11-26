import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const BookModal = ({ carData, setCarData }) => {
    const { user } = useContext(AuthProvider)
    const { name, resalePrice, postDate, picture, originalPrice, _id } = carData;
    const { displayName, email } = user
    const date = (new Date()).toString().split(' ').splice(1, 3).join(' ')
    // If want category name then want 
    // If you want use input but doing hidden that

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const modalData = {
            address: data.address,
            carName: data.carName,
            carPrice: data.carPrice,
            email: data.email,
            name: data.name,
            number: data.number,
            bookedCarId: _id,
            picture: picture,
            bookedDate: date

        }
        fetch('http://localhost:5000/allBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your booking successfully!')
                    setCarData(null)
                }
            })


    };
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="car-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="car-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type='text' readOnly defaultValue={displayName} className='input italic input-bordered w-full ' {...register("name", { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='email' readOnly defaultValue={email} className='input italic input-bordered w-full ' {...register("email", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Name</span>
                            </label>
                            <input type='text' readOnly defaultValue={name} className='input italic input-bordered w-full' {...register("carName", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Price</span>
                            </label>
                            <input type='text' readOnly defaultValue={resalePrice} className='input italic input-bordered w-full' {...register("carPrice", { required: true })} />
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

export default BookModal;