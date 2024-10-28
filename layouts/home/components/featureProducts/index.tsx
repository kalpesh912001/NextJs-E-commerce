import React from 'react'
import { useGetFeatureProductsData } from '../../hooks/useGetFeatureProductsData'
import { ProductListing } from '../../../../components';
import styles from './styles.module.css';

export const FeatureProducts = () => {
    const {
        featureProducts
    } = useGetFeatureProductsData();
    return (
        <div>
            <ProductListing
                header={'Feature Products'}
                data={featureProducts}
            />
        </div>
    )
}

