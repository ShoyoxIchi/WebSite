import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api`;

export const api = {
  getProviders: async () => {
    try {
      const response = await axios.get(`${API_URL}/providers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching providers:", error);
      return [];
    }
  },
  
  getProviderBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/providers/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching provider ${slug}:`, error);
      return null;
    }
  },

  getReviewBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/reviews/${slug}`);
      return response.data;
    } catch (error) {
       console.error(`Error fetching review ${slug}:`, error);
       return null;
    }
  },

  seedDatabase: async () => {
      try {
          await axios.post(`${API_URL}/seed`);
          console.log("Database seeded!");
      } catch (error) {
          console.error("Error seeding database:", error);
      }
  }
};
