import axios from 'axios';

axios.defaults.baseURL = 'https://vanphap.com/api';

export const getCategory = (config) => axios.get('/category', config);

export const getCategoryById = (id, config) => axios.get(`/category/show/${id}`, config);

export const getProduct = (config) => axios.get('/product', config);

export const getProductById = (id, config) => axios.get(`/product/show/${id}`, config);

export const getUser = (config) => axios.get('/user', config);

export const getUserById = (id, config) => axios.get(`/user/show/${id}`, config);

export const getOrder = (config) => axios.get('/order', config);

export const getOrderById = (id, config) => axios.get(`/order/show/${id}`, config);

// export const getAttribute = (config) => axios.get('/attribute', config);

// export const getAttributeById = (id, config) => axios.get(`/attribute/show/${id}`, config);
