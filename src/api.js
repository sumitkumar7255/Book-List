// services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace this with your Django backend API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getBooks = () => api.get('/books/');
export const getBookDetails = (id) => api.get(`/books/${id}/`);
// You can add more API endpoints as needed
