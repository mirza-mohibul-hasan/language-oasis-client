// import React from 'react';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckoutForm = ({ paymentclass, price }) => {
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

        if (paymentIntent.status === 'succeeded') {
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
                                                alert("Status Updated")
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    }
    return (
        <div>
            <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay Now
                </button>

            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;