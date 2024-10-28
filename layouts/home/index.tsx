import React from 'react'
import { Categories, FeatureProducts, LandingBanner, PopulerProducts, SellingStats } from './components';

const Home = () => {
    return (
        <div>
            <LandingBanner />
            <SellingStats />
            <Categories />
            <FeatureProducts />
            <PopulerProducts />
        </div>
    )
}

export default Home;
