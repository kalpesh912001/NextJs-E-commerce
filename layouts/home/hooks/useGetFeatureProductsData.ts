import { fetchFeatureProducts } from "@/data/homeApis";
import { useEffect, useState } from "react"


export const useGetFeatureProductsData = () => {
    const [featureProducts, setFeatureProducts] = useState([]);

    const getFeatureProducts = async () => {
        try {
            const response = await fetchFeatureProducts();
            if (response.status === 200) {
                console.log(response?.data);

                // setFeatureProducts()
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFeatureProducts();
    }, []);
    return {
        featureProducts
    }
}

