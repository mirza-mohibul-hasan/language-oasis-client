// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
                    alert(role+"added")
                }
            })
    }
    return (
        <div className="px-5 border-l-2 ml-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className="bg-[#e2136e]">
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
                    <tbody>
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
                                        <button disabled={user.role === 'admin'} onClick={() => handleUserRole(user, 'admin')} className="btn bg-[#e2136e] btn-ghost btn-xs">Make Admin</button>
                                        <button disabled={user.role === 'instructor'}  onClick={() => handleUserRole(user, 'instructor')} className="btn bg-[#e2136e] btn-ghost btn-xs">Make Instructor</button>
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