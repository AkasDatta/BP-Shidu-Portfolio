import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const onSubmit = data => 
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data,name, data.photoURL)
            .then(() => {
                console.log("User profile info updated");
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        )
    })

    return (
        <div>
             <section className="bg-gray-50 dark:bg-[#24272B]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}className="space-y-4 md:space-y-6">
                                <div className='form-control'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        {...register("name", {
                                            required: true
                                        })}
                                        placeholder="Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                      {
                                        errors.photoURL && <span className='text-red-600'>Photo URL is required</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        name="photoURL" 
                                        {...register("photoURL", {
                                            required: true
                                        })}
                                        id="photoURL"
                                        placeholder="Photo URL"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {
                                        errors.photoURL && <span className='text-red-600'>Photo URL is required</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email" 
                                        {...register("email")}
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@gmail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*]))(?=(.*[a-z]))/
                                        })}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                     {errors.password ?.type === "required" && <p className='text-red-600'>Password is required</p>}
                                     {errors.password ?.type === "minLength" && <p className='text-red-600'>Password must be 6 characters</p>}
                                     {errors.password ?.type === "maxLength" && <p className='text-red-600'>Password must be 20 characters</p>}
                                     {errors.password ?.type === "pattern" && <p className='text-red-600'>Password must have one uppercase, one lowercase, one number and one special characters</p>}

                                </div>
                                <input
                                    type="submit"
                                    value="Create an account"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{' '}
                                    <Link
                                        to="/login"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;