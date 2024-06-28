import { UserState } from "@/types/index"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { profileForm } from "@/constants/forms"
import { currentUser } from '@/redux/features/authSlice';
import { useFormik } from 'formik';
import { Spinner, Input, Translatable } from "@/components/index"
import { useUpdateUserMutation } from "@/redux/services/auth"

const Profile: FC = () => {

    const { user } = useSelector((state: UserState) => state.auth)


    const dispatch = useDispatch();


    const [updateUser] = useUpdateUserMutation()


    const { handleChange, handleSubmit, handleBlur, touched, errors, values, } = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "" || user?.first_name,
            lastName: "" || user?.last_name

        },
        validationSchema: Yup.object({


        }),
        onSubmit: async (formValues: any) => {
 

            try {

                const res:any = await updateUser({ userId: user?.user_id, updateData: formValues })

                if(res && res.user){
                    toast.success("User Update Successfully")
                }else{
                    toast.error("Something Went Wrong!")
                    
                }
                
                
                
            } catch (error) {
                toast.error("Something Went Wrong!")
                
            }
        },

    });



    return (


        <section className="w-full min-h-screen ">

            <figure className="w-full h-1/3 bg-black">
                <img src="http://test.alfarisinfo.com/images/carousal/home/banner.jpg" className="w-full h-full object-cover opacity-60" />
            </figure>


            <div className="relative">

                <figure className="absolute w-40 h-40 overflow-hidden rounded-full left-1/2 -translate-x-1/2 -top-16 border-2 border-myYellow mb-10">
                    <img src="https://avatars.mds.yandex.net/i?id=a157bd26cb6bf541db7a802d7781b0d70ddcfff8-10702829-images-thumbs&n=13" className="w-full h-full object-cover" alt="" />
                </figure>

                <h1 className="text-center font-bold pt-28 capitalize text-3xl text-white">
                    <Translatable text={user ? user.first_name : ""} />
                </h1>




                <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                    <div className="mt-5 flex flex-col gap-2">

                        {profileForm.map((v, i) => (
                            <Input
                                key={i}
                                type={v.type}
                                name={v.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                                values={values}
                                label={v.label}
                            />
                        ))}


                    </div>


                    <button
                        disabled={false}
                        className={`py-2 px-4 mt-2 bg-myYellow hover:bg-myYellow/70 focus:ring-myYellow focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold h-9 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${false && 'opacity-50 cursor-not-allowed'}`}
                        type="submit"
                    >
                        {false ? <Spinner size='6' className='w-fit' /> : 'Update'}
                    </button>


                </form>

            </div>


        </section>


    )
}

export default Profile