import api from "../axios";

export default async function getAllCharacters() {
  try {
    const response = await api.get("/character");
    return response.data;
  } catch (error) {
    return error;
  }
}
