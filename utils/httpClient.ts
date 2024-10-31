import axios, { AxiosRequestConfig } from "axios";
import { toast } from 'react-toastify'

const httpClient = async ({
    method,
    url,
    data,
    responseType,
    headers,
    params,
}: AxiosRequestConfig) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers,
            responseType,
            params,
        });
        return response;
    } catch (error: any) {
        if (!window.navigator.onLine) {
            toast.warning("Check your internet connection");
        } else {
            const { status } = error.response;
            if (status === 500) {
                toast.error("Server error. Please try again later.");
            } else if (status === 404) {
                toast.error("Resource not found.");
            }
        }
        return Promise.reject(error);
    }
};

export default httpClient;

