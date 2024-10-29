import React from 'react'
import styles from './styles.module.css';
import { useGetFacilities } from '../../hooks/useGetFacilities';
import Image from 'next/image';


export const Facilities = () => {
    const {
        facilitiesData
    } = useGetFacilities();
    return (
        <div className={styles.container}>
            {
                facilitiesData?.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.facilityCard} ${(index !== facilitiesData.length - 1) && styles.borderRight}`}>
                            <Image src={item.logo} alt={item.title} />
                            <div className={styles.infoDiv}>
                                <div className={styles.header}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

