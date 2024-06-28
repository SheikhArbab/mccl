import * as Yup from 'yup';
import * as R from "@/redux/services/auth"
import toast, { Toaster } from 'react-hot-toast';
import { Form } from "@/constants/forms"
import { useFormik } from 'formik';
import { Spinner, Input } from "@/components/index"
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'; 
import { currentUser } from '@/redux/features/authSlice';




export default function Login() {

    useEffect(() => {

        document.title = 'Login | Metal Collection .Co LTD'


    }, [])

    const navigate = useNavigate()

    const dispatch = useDispatch();


    const [loginUser, { isLoading }] = R.useLoginMutation()
 


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
                .min(4, 'Password must be at least 4 characters')
                .required('Password is required')
        }),
        onSubmit: async (formValues) => {


            try {

                const res: any = await loginUser(formValues)

                if (!res.data.access) {
                    toast.error("Wrong credentials !")
                }




                if (res && res.data && res.data.access) {

                    localStorage.setItem('token', res.data.access);



                    const data: any = jwtDecode(res.data.access)
                    const { exp, iat, jti, token_type, ...user } = data

                    dispatch(currentUser({ user, token: res.data.access }));



                    toast.success("User Login Successfully")


                    setTimeout(() => {
                        navigate('/payment-voucher')
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
        <section className="fixed inset-0 z-[999999] bg-myGreen overflow-x-hidden overflow-y-auto py-20 flex items-center justify-center flex-col">


            <h1 className='font-bold text-2xl md:text-4xl text-center capitalize mb-8 text-white drop-shadow-lg'>welcome back!</h1>

            <div className="relative bg-white mx-auto rounded-3xl px-10 py-16 max-w-[38rem] md:w-[50rem] shadow-lg">

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
                        className={`py-2 px-4 mt-2 bg-myYellow hover:bg-myYellow/70 focus:ring-myYellow focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold h-9 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${isLoading && 'opacity-50 cursor-not-allowed'}`}
                        type="submit"
                    >
                        {isLoading ? <Spinner size='6' className='w-fit' /> : 'Login'}
                    </button>


                </form>
            </div>
            <Toaster />
        </section>
    );
}
