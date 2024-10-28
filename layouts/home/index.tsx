import React from 'react'
import { Categories, LandingBanner, SellingStats } from './components';

const Home = () => {
    return (
        <div>
            <LandingBanner />
            <SellingStats />
            <Categories />
        </div>
    )
}

export default Home;
