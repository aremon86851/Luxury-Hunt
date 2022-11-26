import React from 'react';

const MyOrderCard = ({ order, i }) => {
    console.log(order)
    const { carName, carPrice, email, picture, name } = order
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
            <td>{carName}</td>
            <td>{carPrice}</td>
            <td>{email}</td>
        </tr>
    );
};

export default MyOrderCard;