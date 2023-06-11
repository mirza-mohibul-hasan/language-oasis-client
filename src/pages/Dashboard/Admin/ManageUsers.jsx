// import React from 'react';

const ManageUsers = () => {
    return (
        <div className="px-5 border-l-2 ml-5">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className="bg-[#e2136e]">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                Pricture
                            </td>
                            <td>
                               Modon Kola
                            </td>
                            <td>Student</td>
                            <td className="space-x-2">
                                <button className="btn bg-[#e2136e] btn-ghost btn-xs">Make Admin</button>
                                <button className="btn bg-[#e2136e] btn-ghost btn-xs">Make Instructor</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;