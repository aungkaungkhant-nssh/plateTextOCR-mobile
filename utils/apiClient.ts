import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json',
    },
});


export const postMultipart = async (url: string, formData: FormData) => {
    console.log(url)
    try {
        const response = await apiClient.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};