// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
const AllClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allclasses = [] } = useQuery({
        queryKey: ['bookedclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/users/admin/allclass')
            return res.data;
        },
    })
    const handleStatus = (item, status) => {
        fetch(`http://localhost:5000/users/admin/classupdate/${item._id}?status=${status}`, {
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
                    alert("Status Updated")
                }
            })
    }
    const [fieldValue, setFieldValue] = useState('');
    const [feedbackItemId, setFeedbackItemId] = useState('')
    const handleId = (id) =>{
        setFeedbackItemId(id)
    }
    const handleFeedback = (feedback) => {
        // console.log(feedback)
        fetch(`http://localhost:5000/users/admin/feedbackupdate/${feedbackItemId}?feedback=${feedback}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    alert("Feedback Added")
                }
            })
        setFieldValue('')
    }
    return (
        <div className="px-5">
            <div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h1>Give FeedBack</h1>
                        <div className="flex flex-col p-5 gap-5">
                            <input className='bg-gray-100 px-5 py-5 rounded'
                                type="text"
                                value={fieldValue}
                                onChange={(e) => setFieldValue(e.target.value)}
                            />
                            <button className="bg-[#e2136e] text-white font-semibold rounded py-1" onClick={() => handleFeedback(fieldValue)}>Submit</button>
                        </div>
                    </form>
                </dialog>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Banner</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Contact</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclasses.map((singleClass, index) =>

                                <tr key={singleClass._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <img className="w-8" src={singleClass.classImage} alt="" />
                                    </td>
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
                                    <td className="uppercase">
                                        {
                                            singleClass.status
                                        }
                                    </td>
                                    <td className="flex gap-1 items-center">
                                        <button onClick={() => handleStatus(singleClass, 'approved')} disabled={singleClass.status === 'approved'} className="btn bg-green-500 btn-ghost btn-xs">Approve</button>
                                        <button onClick={() => handleStatus(singleClass, 'denied')} disabled={singleClass.status === 'approved'} className="btn bg-red-500 btn-ghost btn-xs">Deny</button>
                                        <button onClick={() => {window.my_modal_3.showModal(); handleId(singleClass._id)}} className="btn bg-gray-400 btn-ghost btn-xs">Feedback</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClasses;