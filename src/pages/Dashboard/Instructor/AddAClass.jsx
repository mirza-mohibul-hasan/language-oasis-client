import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { RingLoader } from "react-spinners";

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth()
    if (loading) {
        return <RingLoader  color="#36d7b7"  className='text-center my-24'/>
    }
    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorEmail = form.instructorEmail.value;
        const instructorName = form.instructorName.value;
        const price = parseFloat(form.price.value);
        const seats = parseInt(form.seats.value);
        const newclass = { className, classImage, instructorName, instructorEmail, price, seats, students: 0, status: 'pending' }

        axiosSecure.post('/classes', newclass)
            .then(data => {
                console.log('after posting new menu item', data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        // Register page
        <div className='flex justify-center items-center  w-full '>
            <form onSubmit={handleAdd} className='flex flex-col gap-3 w-2/3 border border-red-600 p-5'>
                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Class Name</label>
                <input type="text" name="className" required placeholder='Ex: German Language' className='bg-gray-100 px-5 py-2 rounded' />

                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Class Banner</label>
                <input type="text" name="classImage" required placeholder='Photo URL' className='bg-gray-100 px-5 py-2 rounded' />

                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Instructor Name</label>
                <input type="text" name="instructorName" value={user?.displayName} readOnly placeholder='Ex: Mohibul Hasan' className='bg-gray-100 px-5 py-2 rounded' />

                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Instructor Email</label>
                <input type="text" name="instructorEmail" value={user?.email} readOnly placeholder='Ex: mike@bike.com' className='bg-gray-100 px-5 py-2 rounded' />

                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Price</label>
                <input type="text" name="price" required placeholder='Ex: 105.34' className='bg-gray-100 px-5 py-2 rounded' />

                <label htmlFor="" className="text-md font-semibold text-gray-600 px-1 -mb-3">Available Seats</label>
                <input type="number" name="seats" required placeholder='Ex: 11' className='bg-gray-100 px-5 py-2 rounded' />

                <input type="submit" value="Add" className='bg-[#2196f3] text-white font-semibold rounded py-1' />
            </form>
        </div>
    );
};

export default AddAClass;