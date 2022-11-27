import React from 'react';

const MyProductRow = ({ product, i }) => {
    console.log(product)
    const { picture, name, resalePrice, } = product
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
            <td><button className="btn btn-sm">DELETE</button></td>
        </tr>
    );
};

export default MyProductRow;