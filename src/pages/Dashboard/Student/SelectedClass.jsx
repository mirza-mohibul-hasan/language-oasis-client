// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const SelectedClass = () => {
    useTitle('Booked Classes')
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookedclasses = [] } = useQuery({
        queryKey: ['bookedclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/bookedclass?email=${user?.email}`)
            return res.data;
        },
    })
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/bookedclass/${item._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#e2136e] dark:bg-slate-900 text-white" >
                            <th>#</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Contact</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-white">
                        {
                            bookedclasses.map((singleClass, index) =>

                                <tr key={singleClass._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        {
                                            singleClass.className
                                        }
                                    </td>
                                    <td>
                                        {
                                            singleClass.instructorName
                                        }
                                    </td>
                                    <td>
                                        {
                                            singleClass.instructorEmail
                                        }
                                    </td>
                                    <td>$
                                        {
                                            singleClass.price
                                        }
                                    </td>
                                    <td>
                                        {
                                            singleClass.seats
                                        }
                                    </td>
                                    <td className="space-x-2">
                                        <Link to={`/dashboard/payment/${singleClass._id}`}><button className="btn bg-green-500 btn-ghost btn-xs">Pay</button></Link>
                                        <button onClick={() => handleDelete(singleClass)} className="btn bg-red-500 btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;