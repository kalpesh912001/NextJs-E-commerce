import React from 'react';
import styles from './styles.module.css';
import { Button, LandingPageSlider } from '../../../../components';
import { BUTTON_STYLES } from '../../../../constants/enums';
import prod_1 from '../../../../public/assets/images/prod-1.png';
import prod_2 from '../../../../public/assets/images/prod-2.jpg';

export const LandingBanner = () => {
    const slidingImages = [prod_1, prod_2];

    return (
        <div className={styles.container}>
            <div className={styles.landingTextContainer}>
                <div className={styles.landingTextSection}>
                    <div className={styles.header}>Lorem ipsum dolor sit.</div>
                    <div className={styles.subText}>Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.</div>
                    <div className={styles.btnSection}>
                        <Button
                            type={BUTTON_STYLES.secondaryBordered}
                            label={'Explore'}
                        />
                        <Button
                            type={BUTTON_STYLES.primary}
                            label={'Buy Now'}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.sliderSection}>
                <LandingPageSlider images={slidingImages} />
            </div>
        </div>
    )
}

