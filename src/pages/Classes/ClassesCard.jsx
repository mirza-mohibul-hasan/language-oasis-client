// import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ClassesCard = ({ singleClass }) => {
    const {_id, classImage, className, instructorEmail, instructorName, price, seats, students } = singleClass;
    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToBooked = item => {
        console.log(item);
        if (user && user.email) {
            const addedclass = { classId: _id, classImage, className, instructorEmail, instructorName, price, seats, students, email: user.email, paymentStatus:'booked'}
            fetch('http://localhost:5000/userclasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization : `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(addedclass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully added.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to book class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Contact: {instructorEmail}</p>
                <p>${price}</p>
                <p>Available seats: {seats}</p>
                <p>Already Enrolled: {students}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToBooked(singleClass)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;