import { FC } from 'react';
import * as TC from "@/components/ui/table";
import { MdDelete, MdEdit } from "react-icons/md";


const User: FC = () => {
    return (
        <section className='p-8 md:p-20 flex min-h-full w-full items-center justify-center'>


            <TC.Table>
                <TC.TableCaption>A list of Users</TC.TableCaption>
                <TC.TableHeader>
                    <TC.TableRow>
                        {["first name", "last name", "email", "role", "permissions", "action"].map(v => <TC.TableHead key={v} className='capitalize'>{v}</TC.TableHead>)}
                    </TC.TableRow>
                </TC.TableHeader>
                <TC.TableBody>
                    <TC.TableRow>
                        {["arbab", "zafar", "arbab.zafar@gmail.com", "admin", "edit,delete,view"].map(v => <TC.TableCell key={v} className='capitalize'>{v}</TC.TableCell>)}

                        <TC.TableCell className='capitalize flex items-center gap-2 text-xl'>
                            <button className='text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center'>
                                <MdDelete />
                            </button>
                            <button className='text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center'>
                                <MdEdit />
                            </button>
                        </TC.TableCell>


                    </TC.TableRow>
                </TC.TableBody>
            </TC.Table>



        </section>
    )
}

export default User