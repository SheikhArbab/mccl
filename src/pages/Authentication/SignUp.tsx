import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Spinner, Translatable } from '@/components/index';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useNewUserMutation } from '@/redux/services/auth';
import { IoMailOutline } from 'react-icons/io5';

const SignUp: React.FC = () => {


  const [data, { isLoading }] = useNewUserMutation()


  const { handleChange, handleSubmit, handleBlur, touched, errors, values, } = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .required('Password is required'),
      first_name: Yup.string()
        .required('First name is required'),
      last_name: Yup.string()
        .required('Last name is required')
    }),

    onSubmit: async (formValues) => {

      try {

        const res: any = await data({
          ...formValues, permissions_detail: [1],
          roles_detail: 3
        })

        if (res.error) toast.error("Something Went Wrong !")

        if (res && res.data && res.data) toast.success("User Added Successfully")


      } catch (error: any) {
        toast.error("Something Went Wrong !")
      }
    },

  });





  return (
    <>
      <Breadcrumb pageName="Register" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block w-9/12 mx-auto" src={'/logo/w.png'} alt="Logo" />
                <img className="dark:hidden w-9/12 mx-auto" src={'/logo/b.png'} alt="Logo" />
              </Link>

          
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free / ابدأ مجانًا</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Register to Metal Collection Co. Ltd
              </h2>

              <form onSubmit={handleSubmit} >

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                  First Name / الاسم الأول
                  </label>
                  <div className="relative">
                    <input onChange={handleChange} onBlur={handleBlur} value={values.first_name}
                      name='first_name'
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z" fill="" />
                          <path d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z" fill="" />
                        </g>
                      </svg>
                    </span>
                    {touched.first_name && errors.first_name && (
                      <p className="text-red-500 text-xs "> <Translatable text={errors.first_name} /></p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Last Name / اسم العائلة
                  </label>
                  <div className="relative">
                    <input onChange={handleChange} onBlur={handleBlur} value={values.last_name}
                      name='last_name'
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z" fill="" />
                          <path d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z" fill="" />
                        </g>
                      </svg>
                    </span>
                    {touched.last_name && errors.last_name && (
                      <p className="text-red-500 text-xs "> <Translatable text={errors.last_name} /></p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    <Translatable text='Email / بريد إلكتروني' />
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleChange} onBlur={handleBlur} value={values.email}
                      name='email'
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      <IoMailOutline />
                    </span>
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs "> <Translatable text={errors.email} /></p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password / كلمة المرور
                  </label>
                  <div className="relative">
                    <input onChange={handleChange} onBlur={handleBlur} value={values.password}
                      name='password'
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z" fill="" />
                          <path d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z" fill="" />
                        </g>
                      </svg>
                    </span>
                    {touched.password && errors.password && (
                      <p className="text-red-500 text-xs "> <Translatable text={errors.password} /></p>
                    )}
                  </div>
                </div>




                <button disabled={isLoading} type='submit' className="mb-5 w-full cursor-pointer flex items-center justify-center rounded-lg border border-primary
                     bg-primary p-4 text-white transition hover:bg-opacity-90">
                  {isLoading ? <Spinner size='6' /> : <Translatable text='Submit / يُقدِّم' />}
                </button>


              </form>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default SignUp;
