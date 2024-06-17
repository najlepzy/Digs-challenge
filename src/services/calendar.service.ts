import api from "../api/axiosConfig";
import { CHALLENGE_ENDPOINT } from "@env";

export const getChallenge = async () => {
  try {
    const response = await api.get(CHALLENGE_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Error fetching challenge:", error);
    throw error;
  }
};
