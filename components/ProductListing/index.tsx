import React from 'react'
import styles from './styles.module.css';
import { Button } from '../Button';
import { ProductCard } from '../ProductCard';

interface Props {
    header?: string;
    data?: any[];
}

export const ProductListing = (props: Props) => {
    const {
        header,
        data
    } = props
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <div className={styles.header}>{header}</div>
                <Button label={'View All'} />
            </div>
            <div className={styles.productList}>
                {
                    data?.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                productName={product?.title}
                                description={product?.description}
                                image={product?.image}
                                rating={product?.rating?.rate}
                                productPrice={product?.price}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

