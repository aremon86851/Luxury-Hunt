import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assests/login-and-signup/login.jpg'
import { AuthProvider } from '../../AuthContext/AuthContext';

const Login = () => {
    const { logIn } = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log(from)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignIn = data => {
        console.log(data)
        const email = data.email;
        const password = data.password
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    };

    return (
        <div className='grid grid-cols-2 gap-10 mx-10 my-10 mt-16'>
            <div className=''>
                <img src={loginImg} alt="" srcset="" />
            </div>
            <div className='mt-10 ml-16' >
                <form onSubmit={handleSubmit(handleSignIn)} className="max-w-xs">
                    <div className='flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">E-mail</span>
                            </label>
                            <input type='email' placeholder='your-email' className='input italic input-bordered w-full' {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type='password' placeholder='your-password' className='input italic input-bordered w-full' {...register("password", { required: true })} />
                    </div>
                    {/* include validation with required or other standard HTML validation rules */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='mt-2'>
                        <p><small>Are you new in Luxury Hunt ? <Link to="/signup" className='text-italic text-blue-800 underline italic'>Create an account</Link></small></p>
                    </div>
                    <input className='btn btn-primary w-full my-5 text-white' type="submit" value='Login' />
                </form>
            </div>
        </div>
    );
};

export default Login;