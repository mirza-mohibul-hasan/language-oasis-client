// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleUserRole = (user, role) => {
        fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/users/admin/roleupdate/${user._id}?role=${role}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Role Update Successful.',
                        showConfirmButton: false,
                        timer: 700
                    });
                }
            })
    }
    useTitle('Manage Users')
    return (
        <div className="px-5 border-l-2 ml-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className="bg-[#e2136e] text-white dark:bg-slate-900">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-white">
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        <img className="w-8" src={user.photo} alt="" />
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className="uppercase">{user.role ? user.role : 'Student'}</td>
                                    <td className="space-x-2">
                                        <button disabled={user.role === 'admin'} onClick={() => handleUserRole(user, 'admin')} className="btn bg-green-600  btn-ghost btn-xs text-white">Make Admin</button>
                                        <button disabled={user.role === 'instructor'}  onClick={() => handleUserRole(user, 'instructor')} className="btn bg-green-600 btn-ghost btn-xs text-white">Make Instructor</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;