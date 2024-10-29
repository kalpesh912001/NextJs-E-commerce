import { fetchUsers } from '@/data/homeApis';
import React, { useEffect, useState } from 'react'

export const useGetCustomerReviewData = () => {
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const response = await fetchUsers();
            if (response.status === 200) {
                setUserData(response?.data?.results);
            }
        } catch (error: any) {
            console.log(error);

        }
    }

    useEffect(() => {
        getUserData()
    }, []);
    return {
        userData
    }
}

