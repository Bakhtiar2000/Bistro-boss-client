import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext)
    const { handleSubmit, reset, register, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        // console.log(data)

        createUser(data.email, data.password)

            .then(result => {
                const user = result.user
                console.log(user)

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser= { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                        .then(res=> res.json())
                        .then(data=> {
                            if(data.insertedId){
                                Swal.fire({
                                    title: 'Account created successfully',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })
                            }
                        })

                        
                    })
                    .catch(err => console.log(err.message))

                    logOut()
                    .then(()=> {
                        navigate('/login')
                    })
                    .catch(err => console.log(err.message))
            })

            .catch(err => console.log(err))
            reset()
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Your photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo is required</span>}
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Your email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be of six characters at least</span>}

                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must not be over 20 characters</span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must contain uppercase, lowercase, number and specia character</span>}
                            </div>

                            {/* Submit */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <p className="text-center mb-2 "><small>Already have an account? <Link className="btn-link" to='/login'>Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;