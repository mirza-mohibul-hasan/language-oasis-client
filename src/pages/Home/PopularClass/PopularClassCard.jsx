import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopularClassCard = ({ singleClass }) => {
    const {_id, classImage, className, instructorEmail, instructorName, price, seats, students } = singleClass;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToBooked = item => {
        console.log(item);
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
        <div className="card w-96 bg-base-100 dark:bg-slate-700 shadow-xl">
            <img className="w-96 h-72 rounded-xl" src={classImage} alt="Shoes" />
            <div className="card-body dark:text-white text-[14px]">
                <div className="flex justify-between">
                    <h2 className="card-title">{className}</h2>
                    <p className="bg-gray-200 dark:bg-slate-500 ml-5 text-center p-1 rounded-md">Best Seller</p>
                </div>
                <p>Instructor: {instructorName}</p>
                <p>Contact: {instructorEmail}</p>

                <div className="flex">
                    <p>Available seats: {seats}</p>
                    <p>Already Enrolled: {students}</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="text-xl font-semibold">${price}</p>
                    <button onClick={() => handleAddToBooked(singleClass)} className="btn btn-primary bg-[#e2136e] border-none btn-sm dark:text-gray-950 dark:bg-white text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;