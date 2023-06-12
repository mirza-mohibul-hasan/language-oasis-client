// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledclasses = [] } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['enrolledclasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledclasses?email=${user?.email}`)
            return res.data;
        },
    })
    console.log(enrolledclasses)
    return (
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Contact</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledclasses.map((singleClass, index) =>

                                <tr key={singleClass._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <th>
                                        <img className="w-8" src={singleClass.classImage} alt="" />
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
                                    <td>
                                        {
                                          singleClass.students  
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;