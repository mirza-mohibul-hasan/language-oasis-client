// import React from 'react';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const CheckoutForm = ({ paymentclass, price }) => {
    const { classImage, className, instructorEmail, instructorName, seats, students } = paymentclass;
    useTitle('Payment')
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // console.log(user)
    useEffect(() => {
        console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        // console.log(card)

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        // console.log(paymentIntent)
        setProcessing(false)

        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                className: paymentclass.className,
                instructorName: paymentclass.instructorName,
                instructorEmail: paymentclass.instructorEmail,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data.insertedId)
                    if (res.data.insertedId) {
                        fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/users/student/paidclass/${paymentclass._id}?paymentStatus=${'paid'}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('access-token')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.modifiedCount) {
                                    fetch(`https://b7a12-summer-camp-server-side-mirza-mohibul-hasan.vercel.app/users/updateapprovedclass/${paymentclass.classId}`, {
                                        method: 'PATCH',
                                        headers: {
                                            'content-type': 'application/json',
                                            authorization: `Bearer ${localStorage.getItem('access-token')}`
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data)
                                            if (data.modifiedCount) {
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: `Login Successful.`,
                                                    showConfirmButton: false,
                                                    timer: 800
                                                })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${cardError}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className="">
            <div>
                <div className="card w-2/3 mx-auto bg-base-100 dark:bg-slate-700 shadow-xl flex-row border-2 p-1 border-[#e2136e] rounded">
                    <img className="w-96 h-52 rounded" src={classImage} alt="Shoes" />
                    <div className="card-body dark:text-white text-[14px]">
                        <h2 className="card-title">{className}</h2>
                        <p>Instructor: {instructorName}</p>
                        <p>Contact: {instructorEmail}</p>

                        <div className="flex">
                            <p>Available seats: {seats}</p>
                            <p>Students: {students}</p>
                        </div>
                        <div className="card-actions justify-end items-center">
                            <p className="text-xl font-semibold">${price}</p>

                        </div>
                    </div>
                </div>
            </div>
            <form className="w-1/2 mt-5 mx-auto border-2 p-5 rounded bg-slate-50 border-[#e2136e]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#020406',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex items-center justify-between">
                    <button className="btn bg-green-600 text-white hover:text-black btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay Now
                    </button>
                    {transactionId && <p className="text-blue-500 text-lg mt-2">Transaction ID: <span className="text-black">{transactionId}</span></p>}
                </div>

            </form>

        </div>
    );
};

export default CheckoutForm;