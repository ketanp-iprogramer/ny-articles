import axios from 'axios';

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = process.env.REACT_APP_NYTIMES_API_URL;

export const fetchPopularArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching the articles", error);
    return [];
  }
};
