import * as Yup from 'yup';
import * as R from "@/redux/services/auth"
import toast, { Toaster } from 'react-hot-toast';
import { currentUser } from "@/redux/features/authSlice"
import { Form } from "@/constants/forms"
import { useFormik } from 'formik';
import { Spinner, Input } from "@/components/index"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';




export default function Login() {

    useEffect(() => {

        document.title = 'Login | Metal Collection .Co LTD'


    }, [])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [loginUser, { isLoading }] = R.useSignInMutation()


    const { handleChange, handleSubmit, handleBlur, touched, errors, values, } = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: async (formValues) => {

            try {

                const res: any = await loginUser(formValues)
                if (!res.data.success) {
                    toast.error("Wrong credentials !")
                }

                if (res && res.data && res.data.success) {



                    toast.success(res.data.message)

                    const { token, rest } = res.data

                    dispatch(currentUser({ user: rest, token }))
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);

                } else {
                    toast.error(res.error.data.message)
                }




            } catch (error: any) {
                toast.error(error.error.data.message)
            }
        },

    });

    return (
        <section className="fixed inset-0 z-[999999] bg-gray-100 overflow-x-hidden overflow-y-auto py-20">


            <h1 className='font-bold text-2xl md:text-4xl text-center capitalize mb-8'>welcome back!</h1>

            <div className="relative bg-white mx-auto  shadow rounded-3xl p-10 max-w-[38rem]">

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <Link to={'/'} className="relative w-32 mx-auto h-32 block">
                        <img src={'/logo/y.png'} className="top-0 w-full h-full object-contain left-0" alt="al-quddus" />
                    </Link>

                    <div className="mt-5 flex flex-col gap-2">

                        {Form.map((v, i) => (
                            <Input
                                key={i}
                                type={v.type}
                                name={v.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />
                        ))}


                    </div>


                    <button
                        disabled={isLoading}
                        className={`py-2 px-4 bg-myYellow hover:bg-myYellow/70 focus:ring-myYellow focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold h-9 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${isLoading && 'opacity-50 cursor-not-allowed'}`}
                        type="submit"
                    >
                        {isLoading ? <Spinner size='6' className='w-fit' /> : 'Login'}
                    </button>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                        <Link
                            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                            to="/sign-up"
                        >
                            or Sign Up
                        </Link>
                        <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
                    </div>
                </form>
            </div>
            <Toaster />
        </section>
    );
}
