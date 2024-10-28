import React from 'react'
import { Categories, Facilities, FeatureProducts, LandingBanner, PopulerProducts, SellingStats } from './components';

const Home = () => {
    return (
        <div>
            <LandingBanner />
            <SellingStats />
            <Categories />
            <FeatureProducts />
            <PopulerProducts />
            <Facilities />
        </div>
    )
}

export default Home;
