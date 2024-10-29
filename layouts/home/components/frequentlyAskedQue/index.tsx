import React from 'react'
import styles from './styles.module.css';
import { Collapse } from '@/components';
import { useGetFAQData } from '../../hooks/useGetFAQData';


export const FrequentlyAskedQue = () => {

    const {
        faqData
    } = useGetFAQData();

    return (
        <div className={styles.container}>
            <div className={styles.header}>FAQ</div>
            <Collapse data={faqData} />
        </div>
    )
}

