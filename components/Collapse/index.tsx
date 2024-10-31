import React, { useState } from 'react'
import styles from './styles.module.css';
import { CollapseData } from '../../types';
import Image from 'next/image';
import { minus_green, plus_green } from '@/public/assets/icons';

interface Props {
    data: CollapseData[];
    indexing?: boolean;
}
export const Collapse = (props: Props) => {
    const {
        data,
        indexing = true
    } = props;

    const [activeCollapse, setActiveCollapse] = useState<number | null>(null);

    const handleCollaps = (index: number) => {
        if (activeCollapse === index) {
            setActiveCollapse(null);
        } else {
            setActiveCollapse(index);
        }
    }
    return (
        <div className={styles.container}>
            {
                data?.map((item: CollapseData, index) => {
                    return (
                        <div key={index}
                            className={styles.collapseSection}>
                            <div className={styles.headerSection}
                                onClick={() => handleCollaps(index)}>
                                <div className={styles.header}>{indexing && `${index + 1}. `}{item.header}</div>
                                <Image src={activeCollapse === index ? minus_green : plus_green} alt='' width={24} />
                            </div>
                            <div className={`${styles.collapseBody} ${activeCollapse === index ? styles.activeBody : styles.deactiveBody}`}>{item?.body}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

