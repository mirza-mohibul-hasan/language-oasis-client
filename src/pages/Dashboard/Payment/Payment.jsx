import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

// import React from 'react';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const Payment = () => {
    const paymentclass = useLoaderData()
    const bill = paymentclass.price;
    const price = parseFloat(bill.toFixed(2))
    console.log(price)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm paymentclass={paymentclass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;