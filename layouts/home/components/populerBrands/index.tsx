
import { LogoSlider } from '../../../../components'
import { brandLogos } from '../../../../constants'
import React from 'react'
import styles from './styles.module.css';
export const PopularBrands = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Popular Brands</div>
            <LogoSlider logos={brandLogos} />
        </div>
    )
}

