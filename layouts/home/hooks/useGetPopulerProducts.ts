import { fetchAllProducts } from "@/data/homeApis";
import { useState, useEffect } from "react";

export const useGetPopulerProducts = () => {
    const [populerProducts, setPopulerProducts] = useState([]);

    const getPopulerProducts = async () => {
        try {
            const response = await fetchAllProducts(8);
            if (response.status === 200) {
                console.log(response?.data);
                setPopulerProducts(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPopulerProducts();
    }, []);

    return {
        populerProducts
    }
}
