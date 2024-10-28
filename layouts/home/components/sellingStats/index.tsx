import React from 'react';
import styles from './styles.module.css';
import { useGetSellingStats } from '../../hooks/useGetSellingStats';
import { StatsDataTypes } from '@/types';

export const SellingStats = () => {
    const {
        statsData
    } = useGetSellingStats();
    return (
        <div className={styles.container}>
            {
                statsData?.map((item: StatsDataTypes, index: number) => {
                    return (
                        <div
                            key={index}
                            className={styles.statCard}>
                            <div className={styles.statsDataSection}>
                                <div className={styles.statData}>{item?.data}</div>
                                <div className={styles.statTitle}>{item?.title}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

