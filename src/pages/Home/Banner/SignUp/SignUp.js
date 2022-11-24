import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='flex justify-end'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-5'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type='text' placeholder='your-name' className='input italic input-bordered w-full max-w-xs' {...register("fullName", { required: true })} />
                    </div>

                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text text-white">E-mail</span>
                        </label>
                        <input type='email' placeholder='your-email' className='input italic input-bordered w-full max-w-xs' {...register("email", { required: true })} />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type='password' placeholder='your-password' className='input italic input-bordered w-full' {...register("password", { required: true })} />
                </div>
                <div>
                    <select {...register("role", { required: true })} className="select w-full  text-black mt-5">
                        <option selected>Buyer</option>
                        <option>Seller</option>
                    </select>
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-primary w-full my-5 text-white' type="submit" value='Signup' />
            </form>
        </div>
    );
};

export default SignUp;