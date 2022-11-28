import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllUserSeller from '../../shared/AllUserSeller/AllUserSeller';
import Loading from '../../shared/Loading/Loading';

const AllSeller = () => {

    const { data: userInfo, isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: () => fetch('http://localhost:5000/allSeller')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Delete</th>
                            <th>Verify </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userInfo.map((user, i) => <AllUserSeller key={user._id} i={i} info={user} refetch={refetch}></AllUserSeller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;