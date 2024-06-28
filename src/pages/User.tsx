import { FC, useEffect, useState } from 'react';
import * as TC from "@/components/ui/table";
import * as C from "@/components/index";
import { MdDelete, MdEdit } from "react-icons/md";
import { useGetAllUsersQuery } from "@/redux/services/auth";
import * as T from '@/types';
import { Loading } from '@/pages/index';

const User: FC = () => {
    const [userData, setUserData] = useState<T.User[]>([]);

    const { data, isLoading } = useGetAllUsersQuery({});

    useEffect(() => {
        document.title = 'Users | Metal Collection .Co LTD';
    }, []);

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [data]);

    return (
        <section className='p-8 md:p-20 flex min-h-full w-full'>
            {isLoading ?
                <Loading /> : <TC.Table>
                    <TC.TableCaption>
                        <C.Translatable text={"A list of Users"} />
                    </TC.TableCaption>
                    <TC.TableHeader>
                        <TC.TableRow>
                            {["first name", "last name", "email", "role", "permissions", "action"].map((v, index) => ( // Added index to map for unique key
                                <TC.TableHead key={index} className='capitalize'>
                                    <C.Translatable text={v} />
                                </TC.TableHead>
                            ))}
                        </TC.TableRow>
                    </TC.TableHeader>
                    <TC.TableBody>
                        {userData.map((user) => (
                            <TC.TableRow key={user.id}>
                                <TC.TableCell className=''>
                                    <C.Translatable text={user.first_name} />
                                </TC.TableCell>
                                <TC.TableCell className=''>
                                    <C.Translatable text={user.last_name} />
                                </TC.TableCell>
                                <TC.TableCell className=''>
                                    <C.Translatable text={user.email} />
                                </TC.TableCell>
                                <TC.TableCell className=''>
                                    <C.Translatable text={user.roles_details.role} />
                                </TC.TableCell>
                                <TC.TableCell className=''>
                                    {user.permissions_details.map((perm) => (
                                        <span key={perm.id}>{perm.permission}</span>
                                    ))}
                                </TC.TableCell>
                                <TC.TableCell className='capitalize flex items-center gap-2 text-xl'>
                                    <button className='text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center'>
                                        <MdDelete />
                                    </button>
                                    <button className='text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center'>
                                        <MdEdit />
                                    </button>
                                </TC.TableCell>
                            </TC.TableRow>
                        ))}

                        {userData.length === 0 && !isLoading && (
                            <TC.TableRow>
                                <TC.TableCell colSpan={6} className='text-center'>
                                    No users found.
                                </TC.TableCell>
                            </TC.TableRow>
                        )}
                    </TC.TableBody>
                </TC.Table>
            }


        </section>
    );
};

export default User;
