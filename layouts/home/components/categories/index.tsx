import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useGetCategoriesdata } from '../../hooks/useGetCategoriesdata';
import Image from 'next/image';

export const Categories = () => {

    const {
        categoriesList
    } = useGetCategoriesdata();

    return (
        <div className={styles.container}>
            <div className={styles.header}>Categories</div>
            <div className={styles.categoryList}>
                {
                    categoriesList?.map((item, index) => {
                        return (
                            <div key={index}
                                className={styles.categoryDiv}>
                                <div className={styles.categoryLogoSection}>
                                    <Image src={item.logo} alt={item.title} width={60} />
                                </div>
                                <div className={styles.categoryName}>{item?.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

