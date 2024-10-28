import React from 'react'
import { useGetPopulerProducts } from '../../hooks/useGetPopulerProducts'
import { ProductListing } from '../../../../components';

export const PopulerProducts = () => {
    const {
        populerProducts
    } = useGetPopulerProducts();
    return (
        <div>
            <ProductListing
                header={'Most Popular Products'}
                data={populerProducts}
            />
        </div>
    )
}
