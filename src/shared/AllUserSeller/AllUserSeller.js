import React from 'react';
import toast from 'react-hot-toast';
import { handleDeleteRoute } from '../../utilities/handleDeleteRoute';

const AllUserSeller = ({ i, info, refetch }) => {
    const { userName, userEmail, _id, role, status } = info

    const handleDeleteUser = id => {
        handleDeleteRoute('allSeller', refetch, id)
        handleDeleteRoute('allUser', refetch, id)
    }
    const handleVerify = id => {
        fetch(`https://luxary-hunt-server.vercel.app/verifySeller?email=${userEmail}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Seller verified successfully!')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{userName} <span>
                {
                    status === 'verified' && <svg style={{ color: "blue", display: 'inline' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="blue"></path> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="blue"></path> </svg>
                }
            </span></td>
            <td>{userEmail}</td>
            <td>
                {
                    role !== "Admin" && <button className='btn btn-sm' onClick={() => handleDeleteUser(_id)}>DELETE</button>
                }
            </td>
            <td>
                {
                    status === 'verified' && <span className='text-green-600'>Verified</span>
                }
                {
                    status === 'unverified' && <button className='btn btn-sm' onClick={() => handleVerify(_id)}>verify</button>
                }
            </td>
        </tr>
    );
};

export default AllUserSeller;