import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';

interface Props {
    logos: any[];
}

export const LogoSlider = (props: Props) => {
    const {
        logos
    } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                {logos.map((logo, index) => (
                    <Image key={index} src={logo} alt={`Logo ${index}`} />
                ))}
            </div>
        </div>
    )
}
