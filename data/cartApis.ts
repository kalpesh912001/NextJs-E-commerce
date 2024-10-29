import httpClient from "../utils/httpClient";

export const fetchCartProducts = async (limit: number) => {
    try {
        const response = await httpClient({
            method: "GET",
            url: `https://fakestoreapi.com/carts/${limit}`
        });

        return response;
    } catch (error: any) {
        throw error;
    }
}