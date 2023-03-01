import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Show and hide password
    const [openPassword, setOpenPassword] = useState(false);
    const [openConfirmPassword, setOpenConfirmPassword] = useState(false);

    const toggleBtnPassword = () => {
        setOpenPassword(!openPassword);
    }

    const toggleBtnConfirmPassword = () => {
        setOpenConfirmPassword(!openConfirmPassword);
    }

    const handleRegister = data => {
        if (data.password === data.confirmPassword) {
            console.log(data);
        } else {
            console.log("Password & Confirm Password must be same");
        }
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 m-5 p-7 border border-primary rounded-lg shadow-2xl'>
                <h2 className='text-2xl text-center font-bold'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="User Name"
                            className="input input-accent w-full max-w-xs"
                        />
                        {
                            errors.name && <p className='text-red-600'>{errors.name?.message}</p>
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="user@gmail.com"
                            className="input input-accent w-full max-w-xs"
                        />
                        {
                            errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <div className='flex'>
                            <div className='w-5/6'>
                                <input
                                    type={(openPassword === false) ? 'password' : 'text'}
                                    {...register("password", {
                                        required: "Password is required",
                                        maxLength: { value: 8, message: "Password must be 6-8 character" },
                                        minLength: { value: 6, message: "Password must be 6-8 character" }
                                    })}
                                    placeholder="●●●●●●●●"
                                    className="input input-accent w-full max-w-max lg:max-w-xs absolute"
                                />
                            </div>
                            <div className='input grid place-content-center w-1/6 border border-accent border-l-0 lg:border-r-0 rounded-l-none relative'>
                                {
                                    (openPassword === false)
                                        ?
                                        <AiFillEyeInvisible
                                            className='w-full text-4xl'
                                            onClick={toggleBtnPassword}
                                        />
                                        :
                                        <AiFillEye
                                            className='w-full text-4xl'
                                            onClick={toggleBtnPassword}
                                        />
                                }
                            </div>
                        </div>
                        {
                            errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <div className='flex'>
                            <div className='w-5/6'>
                                <input
                                    type={(openConfirmPassword === false) ? 'password' : 'text'}
                                    {...register("confirmPassword", {
                                        required: "Password is required",
                                        maxLength: { value: 8, message: "Password must be 6-8 character" },
                                        minLength: { value: 6, message: "Password must be 6-8 character" }
                                    })}
                                    placeholder="●●●●●●●●"
                                    className="input input-accent w-full max-w-max lg:max-w-xs absolute"
                                />
                            </div>
                            <div className='input grid place-content-center w-1/6 border border-accent border-l-0 lg:border-r-0 rounded-l-none relative'>
                                {
                                    (openConfirmPassword === false)
                                        ?
                                        <AiFillEyeInvisible
                                            className='w-full text-4xl'
                                            onClick={toggleBtnConfirmPassword}
                                        />
                                        :
                                        <AiFillEye
                                            className='w-full text-4xl'
                                            onClick={toggleBtnConfirmPassword}
                                        />
                                }
                            </div>
                        </div>
                        {
                            errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                        }
                        <label className="label">
                            <span className="label-text-alt"></span>
                        </label>
                    </div>

                    <input type="submit" className='btn btn-accent text-white w-full' value='Register' />
                </form>

                <p className='pt-3 text-center'>
                    Already have an account? <Link className='text-primary' to='/login'>Please Login</Link>
                </p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;