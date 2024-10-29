import React from 'react'
import { Categories, CustomersReview, Facilities, FeatureProducts, FestiveSalePoster, FrequentlyAskedQue, LandingBanner, PopularBrands, PopulerProducts, SellingStats } from './components';

const Home = () => {
    return (
        <div>
            <LandingBanner />
            <SellingStats />
            <Categories />
            <FeatureProducts />
            <Facilities />
            <FestiveSalePoster />
            <PopulerProducts />
            <PopularBrands />
            <FrequentlyAskedQue />
            <CustomersReview />
        </div>
    )
}

export default Home;
