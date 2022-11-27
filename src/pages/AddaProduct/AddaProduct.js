import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Loading from '../../shared/Loading/Loading';

const AddaProduct = () => {
    const { user } = useContext(AuthProvider)
    const imgbbApi = process.env.REACT_APP_imgbb_apiKey;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const date = (new Date()).toString().split(' ').splice(1, 3).join(' ')


    const userName = user?.displayName;
    const userEmail = user?.email;

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('http://localhost:5000/carCategory')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }



    const handleAddProduct = data => {
        const picture = data.image[0]
        const formData = new FormData();
        formData.append('image', picture)
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imageData) => {
                const imageUrl = imageData.data.url
                const usedCarData = {
                    picture: imageUrl,
                    name: data.carName,
                    condition: data.condition,
                    location: data.location,
                    resalePrice: data.resalePrice,
                    originalPrice: data.originalPrice,
                    yearsOfUse: data.yearsOfUse,
                    postDate: data.postDate,
                    sellerName: data.fullName,
                    email: data.email,
                    number: data.mobileNumber,
                    description: data.description,
                    categoryId: data.categoryId
                }
                fetch('http://localhost:5000/usedCar', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(usedCarData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Product Added successfully!")
                            reset()
                        }
                    })

            })
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <form onSubmit={handleSubmit(handleAddProduct)} className="mx-10">
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Today Date</span>
                            </label>
                            <input type='text' defaultValue={date} className='input italic input-bordered w-full ' {...register("postDate", { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Seller Name</span>
                            </label>
                            <input type='text' defaultValue={userName} className='input italic input-bordered w-full ' {...register("fullName", { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='email' defaultValue={userEmail} className='input italic input-bordered w-full ' {...register("email", { required: true })} />
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Name</span>
                            </label>
                            <input type='text' placeholder='your-car-name' className='input italic input-bordered w-full' {...register("carName", { required: true })} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-black">Car Condition</span>
                            </label>
                            <select {...register("condition", { required: true })} className="select w-full  text-black mt-2 max-w-xl border border-gray-500">
                                <option selected>excellent</option>
                                <option>good</option>
                                <option>fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Picture</span>
                            </label>
                            <input type='file' placeholder='choose-your-profile' className='file-input file-input-bordered file-input-sm w-full italic' {...register("image", { required: true })} />
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Mobile Number</span>
                            </label>
                            <input type='text' placeholder='your-number' className='input italic input-bordered w-full' {...register("mobileNumber", { required: true })} />
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Location</span>
                            </label>
                            <input type='text' placeholder='your-location' className='input italic input-bordered w-full' {...register("location", { required: true })} />
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Car Description</span>
                            </label>
                            <textarea type='text' className="textarea textarea-info italic w-full" placeholder='years-of-use' {...register("description", { required: true })} ></textarea>
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Years of use</span>
                            </label>
                            <input type='text' className="input italic input-bordered w-full" placeholder='years-of-use' {...register("yearsOfUse", { required: true })} ></input>
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Original Price</span>
                            </label>
                            <input type='text' placeholder='original-price' className='input italic input-bordered w-full' {...register("originalPrice", { required: true })} />
                        </div>
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-black">Resale Price</span>
                            </label>
                            <input type='text' placeholder='resale-price' className='input italic input-bordered w-full' {...register("resalePrice", { required: true })} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-black">Category</span>
                            </label>
                            <select {...register("categoryId", { required: true })} className="select w-full  text-black mt-2 max-w-xl border border-gray-500">
                                {
                                    categories.map(category => <>
                                        <option value={category._id}>{category.categoryName}</option>
                                    </>)
                                }
                            </select>
                        </div>
                        {/* include validation with required or other standard HTML validation rules */}
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='btn btn-primary w-full mb-2 mt-5 text-white max-w-xl' type="submit" value='Add A Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddaProduct;