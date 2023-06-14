// import React from 'react';

import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import useTitle from "../../../hooks/useTitle";
const AdminHome = () => {
    const { user } = useAuth();
    const [statistics, setStatistics] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/users/admin/statistics', {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setStatistics(data))
    }, [])
    const { totalClasses, deniedClassesCount, totalusersCount, instructorsCount, studentsCount, approvedClassesCount, paidUserclassesCount, bookedUserclassesCount } = statistics;
    const data = [
        { name: 'Total Class', Value: totalClasses },
        { name: 'Approved', Value: approvedClassesCount },
        { name: 'Denied Class', Value: deniedClassesCount },
        { name: 'Booked Class', Value: bookedUserclassesCount },
        { name: 'Sold Class', Value: paidUserclassesCount },
    ];
    useTitle('Admin Home')
    return (
        <div>
            <h1 className="text-center text-5xl dark:text-white mb-5">Welcome <span className="text-[#e2136e]">{user?.displayName}</span>!!</h1>
            <div className="flex justify-center">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaUser className="text-2xl"></FaUser>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-primary">{totalusersCount}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-blue-500">
                            <FaUser className="text-2xl"></FaUser>
                        </div>
                        <div className="stat-title">Instructors</div>
                        <div className="stat-value text-blue-500">{instructorsCount}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-green-600">
                            <FaUser className="text-2xl"></FaUser>
                        </div>
                        <div className="stat-title">Students</div>
                        <div className="stat-value text-green-600">{studentsCount}</div>
                    </div>

                </div>
            </div>

            <div className="flex justify-center mt-5">
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Value" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default AdminHome;