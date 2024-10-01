import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
