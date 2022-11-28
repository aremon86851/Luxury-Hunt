import React from 'react';

const MyWishlistItem = ({ item, i, setHandlePaymentId }) => {
    const { picture, name, resalePrice, email } = item
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
            <td>{resalePrice}</td>
            <td>{email}</td>

            <td><label onClick={() => setHandlePaymentId(item)} htmlFor="car-modal" className="btn btn-small">Book Now</label></td>
        </tr>
    );
};

export default MyWishlistItem;