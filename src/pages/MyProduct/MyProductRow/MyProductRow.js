import React from 'react';
import toast from 'react-hot-toast';

const MyProductRow = ({ product, i, refetch }) => {
    const { picture, name, resalePrice, _id } = product;
    const handleDelete = id => {
        fetch(`http://localhost:5000/sellerProductDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your item deleted successfully!')
                refetch()
            })
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
            <td><button className="btn btn-sm">Available</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-sm">DELETE</button></td>
        </tr>
    );
};

export default MyProductRow;