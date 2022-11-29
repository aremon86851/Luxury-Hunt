import React from 'react';
import { handleDeleteRoute } from '../../utilities/handleDeleteRoute';

const AllUserSeller = ({ i, info, refetch }) => {
    const { userName, userEmail, _id, role } = info

    const handleDeleteUser = id => {
        handleDeleteRoute('allSeller', refetch, id)
        handleDeleteRoute('allUser', refetch, id)
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>
                {
                    role !== "Admin" && <button className='btn btn-sm' onClick={() => handleDeleteUser(_id)}>DELETE</button>
                }
            </td>
            <td>{
                role === "Seller" && <button className='btn btn-sm'>unverified</button>
            }</td>
        </tr>
    );
};

export default AllUserSeller;