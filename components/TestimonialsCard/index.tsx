import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import { rating_5_star } from '@/public/assets/icons';

interface Props {
    customerName: string;
    profileImage: string;
}

export const TestimonialsCard = (props: Props) => {
    const {
        customerName,
        profileImage
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.profileAndRating}>
                <Image src={profileImage} alt='' width={60} height={60} />
                <Image src={rating_5_star} alt='' width={131} />
            </div>
            <div className={styles.customerName}>{customerName}</div>
            <div className={styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est atque mollitia ipsa, dolorum aspernatur et cum quam sed modi corporis animi beatae, odio possimus error sapiente numquam incidunt itaque?</div>
        </div>
    )
}
