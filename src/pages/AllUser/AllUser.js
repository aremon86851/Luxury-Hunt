import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllUserSeller from '../../shared/AllUserSeller/AllUserSeller';
import Loading from '../../shared/Loading/Loading';

const AllUser = () => {
    const { data: allUsers, isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: () => fetch('http://localhost:5000/allUser')
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
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, i) => <AllUserSeller key={user._id} i={i} info={user} refetch={refetch}></AllUserSeller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;