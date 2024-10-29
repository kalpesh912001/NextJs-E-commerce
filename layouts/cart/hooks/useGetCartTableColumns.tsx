import { fetchAllProducts } from '@/data/homeApis';
import React, { useEffect, useState } from 'react';

const useGetCartTableColumns = () => {
    const [cartProducts, setCartPrducts] = useState<any[]>([]);
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({});
    const [subtotal, setSubtotal] = useState<{ [key: number]: number }>({});
    const [grandTotal, setGrandTotal] = useState(0);
    const demoColors = ['Red', 'Yellow', 'Blue', 'Green'];
    const demoSizes = ['M', 'L', 'S', 'XL'];

    const getcartProducts = async () => {
        try {
            const response = await fetchAllProducts(2);
            if (response.status === 200) {
                setCartPrducts(response?.data);
                console.log(response?.data);

                const initialQuantities = response?.data?.reduce((acc: { [key: number]: number }, item: any) => {
                    acc[item.id] = 1;
                    return acc;
                }, {});
                setQuantity(initialQuantities);
            }
        } catch (error: any) {
            console.log(error);

        }
    }

    useEffect(() => {
        getcartProducts();
    }, []);

    useEffect(() => {
        const total = Object.values(subtotal).reduce((acc, curr) => acc + curr, 0);
        setGrandTotal(total);
    }, [subtotal]);


    const handleDecrease = (id: number) => {
        setQuantity((prev) => {
            const updatedQuantity = Math.max((prev[id] || 1) - 1, 1);
            setSubtotal((subtotalPrev) => ({
                ...subtotalPrev,
                [id]: updatedQuantity * cartProducts.find((item: any) => item.id === id)?.price || 0
            }));
            return { ...prev, [id]: updatedQuantity };
        });
    };


    const handleIncrease = (id: number) => {
        setQuantity((prev: any) => {
            const updatedQuantity = (prev[id] || 1) + 1;
            setSubtotal((subtotalPrev: any) => ({
                ...subtotalPrev,
                [id]: updatedQuantity * cartProducts.find((item: any) => item.id === id)?.price || 0
            }));
            return { ...prev, [id]: updatedQuantity };
        });
    };


    return {
        cartProducts,
        demoColors,
        demoSizes,
        quantity,
        handleDecrease,
        handleIncrease,
        subtotal,
        grandTotal
    }
}

export default useGetCartTableColumns
