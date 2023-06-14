// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import moment from 'moment';
import useTitle from "../../../hooks/useTitle";
const MyPayments = () => {
    useTitle('Payment History')
    const { user } = useContext(AuthContext)
    const [payments, setPayments] = useState([])
    useEffect(() => {
        fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/paymenthistory?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [user])
    console.log(payments)
    return (
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table table-md text-center">
                    <thead className="bg-[#dc3545] rounded dark:bg-slate-900">
                        <tr className="text-white">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Transction ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) =>
                                <tr key={payment._id} className="bg-slate-100 dark:bg-transparent dark:text-white">
                                    <th>{index+1}</th>
                                    <td>{payment.className}</td>
                                    <td>{payment.instructorName}</td>
                                    <td>{payment.instructorEmail}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.price}</td>
                                    <td>{moment(payment.date).format('YYYY-MM-DD hh:mm:ss A')}</td>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPayments;