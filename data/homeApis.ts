import httpClient from "../utils/httpClient";


export const fetchFeatureProducts = async () => {
    try {
        const response = await httpClient({
            method: "GET",
            url: `https://fakestoreapi.com/products?limit=4`,
        });

        return response.data;
    } catch (error: any) {
        throw error;
    }
};
