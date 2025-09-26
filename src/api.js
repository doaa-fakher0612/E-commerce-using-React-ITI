import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

export const getProducts = (limit = 10, skip = 0) =>
  api.get(`/products`, { params: { limit, skip } })
     .then((r) => r.data); // { products, total, skip, limit }

export const getProductById = (id) =>
  api.get(`/products/${id}`).then((r) => r.data);