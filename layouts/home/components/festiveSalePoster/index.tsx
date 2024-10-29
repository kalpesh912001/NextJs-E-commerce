import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { sale_off } from '../../../../public/assets/images';
import { Button } from '../../../../components';

export const FestiveSalePoster = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={sale_off} alt='' width={269} className={styles.saleOffImage} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>Lorem ipsum dolor sit.</div>
                    <div className={styles.infoDescription}>Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.</div>
                    <Button
                        label={'Buy Now'}
                        mainClassName={styles.buyNowBtn}
                    />
                </div>
            </div>
        </div>
    )
}
