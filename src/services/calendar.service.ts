import api from "../api/axiosConfig";
import config from "../utils/config";

export const getChallenge = async () => {
  try {
    const response = await api.get(config.CHALLENGE_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Error fetching challenge:", error);
    throw error;
  }
};
