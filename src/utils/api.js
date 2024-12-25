import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log('API URL:', API_URL);

export const api = axios.create({
  baseURL: API_URL,
});

// Function to get all sliders
export const getAllPublicSliders = async () => {
  try {
    const response = await api.get('/api/public/sliders'); // Make a GET request to /sliders
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching sliders:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const getAllPublicCollections = async () => {
  try {
    const response = await api.get('/api/public/collections'); // Adjust the endpoint as necessary
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

// Function to get public SEO data by URL
export const getPublicSeoByUrl = async (url) => {
  try {
    const response = await api.get(`/api/public/seo${url}`); // Make a GET request to /seo/:url
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

export default api;
