import httpClient from "../utils/httpClient";


export const fetchAllProducts = async (limit: number) => {
    try {
        const response = await httpClient({
            method: "GET",
            url: `https://fakestoreapi.com/products?limit=${limit}`,
        });

        return response;
    } catch (error: any) {
        throw error;
    }
};


export const fetchUsers = async () => {
    try {
        const response = await httpClient({
            method: "GET",
            url: `https://randomuser.me/api/?results=9&nat=us,gb,ca,in`
        });
        return response;
    } catch (error: any) {
        throw error;
    }
}