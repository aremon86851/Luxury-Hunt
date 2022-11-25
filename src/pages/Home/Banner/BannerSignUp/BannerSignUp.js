import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthProvider } from '../../../../AuthContext/AuthContext';
import handleSignUp from '../../../../utilities/handleSignUp';

const SignUp = () => {
    const { user, createUser, userProfile } = useContext(AuthProvider)
    const imgbbApi = process.env.REACT_APP_imgbb_apiKey;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleCreateUser = data => {
        const name = data.fullName;
        const email = data.email;
        const password = data.password;
        const picture = data.image[0]
        const userRole = data.role;
        console.log(data)
        handleSignUp(name, email, password, picture, userRole, createUser, userProfile, imgbbApi)
    };

    return (
        <div className='flex justify-end'>
            {
                user?.uid ? '' : <>
                    <form onSubmit={handleSubmit(handleCreateUser)}>
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
                        <div className="form-control w-full  max-w-xl">
                            <label className="label">
                                <span className="label-text text-white">Picture</span>
                            </label>
                            <input type='file' placeholder='choose-your-profile' className='file-input file-input-bordered file-input-sm w-full italic' {...register("image", { required: true })} />
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
                </>
            }
        </div>
    );
};

export default SignUp;