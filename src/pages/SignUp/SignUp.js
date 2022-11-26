import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signUpBg from '../../assests/login-and-signup/signups.jpg'
import { AuthProvider } from '../../AuthContext/AuthContext';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import handleSignUp from '../../utilities/handleSignUp';

const SignUp = () => {
    const { createUser, userProfile } = useContext(AuthProvider)
    const imgbbApi = process.env.REACT_APP_imgbb_apiKey;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleCreateUser = data => {
        const name = data.fullName;
        const email = data.email;
        const password = data.password;
        const picture = data.image[0]
        const userRole = data.role;

        handleSignUp(name, email, password, picture, userRole, createUser, userProfile, imgbbApi)

    };
    return (
        <div className='grid grid-cols-2 gap-10 my-10 mx-10'>
            <div className='flex items-center'>
                <img src={signUpBg} alt="" srcset="" />
            </div>
            <div className="flex flex-col w-full border-opacity-50">
                <form onSubmit={handleSubmit(handleCreateUser)} className="mx-10">
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type='text' placeholder='your-name' className='input italic input-bordered w-full ' {...register("fullName", { required: true })} />
                    </div>

                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text text-black">E-mail</span>
                        </label>
                        <input type='email' placeholder='your-email' className='input italic input-bordered w-full ' {...register("email", { required: true })} />
                    </div>
                    <div className="form-control w-full  max-w-xl">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type='password' placeholder='your-password' className='input italic input-bordered w-full' {...register("password", { required: true })} />
                    </div>
                    <div className="form-control w-full  max-w-xl">
                        <label className="label">
                            <span className="label-text text-black">Picture</span>
                        </label>
                        <input type='file' placeholder='choose-your-profile' className='file-input file-input-bordered file-input-sm w-full italic' {...register("image", { required: true })} />
                    </div>
                    <div>
                        <select {...register("role", { required: true })} className="select w-full  text-black mt-5 max-w-xl border border-gray-500">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    {/* include validation with required or other standard HTML validation rules */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='mt-2 mx-2'>
                        <p>Already have an account. <Link to="/login" className='text-italic text-blue-800 underline italic'>Login</Link></p>
                    </div>
                    <input className='btn btn-primary w-full mb-2 mt-5 text-white max-w-xl' type="submit" value='Signup' />
                </form>
                <div className="divider mx-10 max-w-xl">OR</div>
                <div className="mx-10 w-full">
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default SignUp;