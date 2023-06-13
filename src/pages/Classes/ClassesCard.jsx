// import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassesCard = ({ singleClass }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { _id, classImage, className, instructorEmail, instructorName, price, seats, students } = singleClass;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToBooked = () => {
        if (user && user.email) {
            const addedclass = { classId: _id, classImage, className, instructorEmail, instructorName, price, seats, students, email: user.email, paymentStatus: 'booked' }
            fetch('http://localhost:5000/userclasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(addedclass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully added.',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                    else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Already exists.',
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
        <div className="card w-96 bg-base-100 dark:bg-slate-700 shadow-xl">
            <img className="w-96 h-72 rounded-xl" src={classImage} alt="Shoes" />
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
                    <button onClick={() => handleAddToBooked()} disabled={isAdmin || isInstructor || seats==0} className="btn btn-primary bg-[#e2136e] border-none btn-sm dark:text-gray-950 dark:bg-white text-white dark:hover:bg-blue-500">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;