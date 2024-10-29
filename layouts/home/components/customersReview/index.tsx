import React from 'react'
import { useGetCustomerReviewData } from '../../hooks/useGetCustomerReviewData'
import { CustomerReviewSlider } from '../../../../components';
import styles from './styles.module.css'

export const CustomersReview = () => {
    const {
        userData
    } = useGetCustomerReviewData();
    return (
        <div className={styles.container}>
            <div className={styles.header}>Customers Review</div>
            <CustomerReviewSlider
                data={userData} />
        </div>
    )
}

