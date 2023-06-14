import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const MyClasses = () => {
    useTitle('My Classes')
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {  data: myclasses = [] } = useQuery({
        queryKey: ['myclasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myclasses?email=${user?.email}`)
            return res.data;
        },
    })
    return (
        <div className="px-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#dc3545] text-white">
                            <th>#</th>
                            <th>Banner</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Contact</th>
                            <th>Price</th>
                            <th>Enrolled</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Admin Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclasses.map((singleClass, index) =>

                                <tr key={singleClass._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <img className="w-8" src={singleClass.classImage} alt="" />
                                    </td>
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
                                            singleClass.students
                                        }
                                    </td>
                                    <td>
                                        {
                                            singleClass.seats
                                        }
                                    </td>
                                    <td className="uppercase">
                                        {
                                            singleClass.status
                                        }
                                    </td>
                                    <td>
                                        {
                                            (singleClass.status=='denied' || singleClass.status=='approved') && singleClass.feedback
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

export default MyClasses;