import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsCard } from '@/components/TestimonialsCard';

interface Props {
    data: any[];
}

export const CustomerReviewSlider = (props: Props) => {
    const {
        data
    } = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        navigator: false,
    };

    return (
        <Slider {...settings} className='gap-3'>
            {data.map((item, index) => (
                <div className='px-2'
                    key={index}>
                    <TestimonialsCard

                        customerName={`${item?.name?.first} ${item?.name?.last}`}
                        profileImage={item?.picture?.medium}
                    />
                </div>
            ))}
        </Slider>
    )
}
