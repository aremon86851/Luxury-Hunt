import React from 'react';
import { useForm } from "react-hook-form";

const AddCar = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); //
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text text-white">Full Name</span>
                    </label>
                    <input type='text' placeholder='your-name' className='input input-bordered w-full max-w-xl' {...register("fullName")} />
                </div>

                <div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text text-white">Full Name</span>
                    </label>
                    <input type='text' placeholder='your-name' className='input input-bordered w-full max-w-xl' {...register("exampleRequired", { required: true })} />
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddCar;