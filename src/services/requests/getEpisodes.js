import api from "../axios";

export default async function getAllEpisodes(episode) {
  try {
    const response = await api.get(`/episode/${episode}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
