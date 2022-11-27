import React from 'react';
import toast from 'react-hot-toast';
import { handleDeleteRoute } from '../../../utilities/handleDeleteRoute';

const MyProductRow = ({ product, i, refetch }) => {
    const { picture, name, resalePrice, _id } = product;
    const handleAdvertise = id => {
        fetch(`http://localhost:5000/advertiseItem/${_id}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Item advertise successfully!')
            })
    }
    const handleDelete = id => {
        handleDeleteRoute('sellerProductDelete', refetch, id)
        handleDeleteRoute('advartiseItemDelete', refetch, id)
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-20 h-16 rounded-xl">
                        <img src={picture} alt="" className='w-full' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${resalePrice}</td>
            <td><button onClick={() => handleAdvertise(_id)} className="btn btn-sm">Available</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-sm">DELETE</button></td>
        </tr>
    );
};

export default MyProductRow;