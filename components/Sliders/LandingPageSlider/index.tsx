import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { arrow_left, arrow_right } from '@/public/assets/icons';
import styles from './styles.module.css';

interface Props {
    images: any[];
}
export const LandingPageSlider = (props: Props) => {
    const {
        images
    } = props;

    let sliderRef: any = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        navigator: false
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}
                ref={slider => {
                    sliderRef = slider;
                }}>
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={`slide-${index}`} width={1000} />
                ))}
            </Slider>
            <div className={styles.naviGationSection}>
                <button
                    className={styles.sliderButton}
                    onClick={previous}>
                    <Image src={arrow_left} alt={'left'} width={16} />
                </button>
                <button
                    className={styles.sliderButton}
                    onClick={next}>
                    <Image src={arrow_right} alt={'left'} width={16} />
                </button>
            </div>
        </div>
    )
}


