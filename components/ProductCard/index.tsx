import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { heart_shape, rating_star } from '@/public/assets/icons';
import { Button } from '../Button';

interface Props {
    productName: string;
    description: string;
    image: any;
    rating?: string;
    productPrice: number;
}

export const ProductCard = (props: Props) => {
    const {
        productName,
        description,
        rating,
        image,
        productPrice
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt={productName} width={'100%'} height={240} />
                <div className={styles.ratingDiv}>
                    <span className={styles.ratingText}>{rating}</span>
                    <Image src={rating_star} alt='' width={14} />
                </div>
                <div className={styles.saveProductDiv}>
                    <Image src={heart_shape} alt='save' width={16} />
                </div>
            </div>
            <div className={styles.productInfoSection}>
                <div className={styles.titleDescDiv}>
                    <div className={styles.title}>{productName}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div className={styles.pricingSection}>
                    <span className={styles.price}>Rs.{productPrice}</span>
                    <span className={styles.actualPrice}>Rs.{productPrice + 200}</span>
                    <span className={styles.descountPercentage}>
                        ({Math.round(((200 / (productPrice + 200)) * 100))}% off)
                    </span>
                </div>
                <Button
                    label={'Add To Cart'}
                />
            </div>
        </div>
    )
}

