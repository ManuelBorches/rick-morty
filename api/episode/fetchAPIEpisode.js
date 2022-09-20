import axios from "axios";
import { BASE_URL } from "..";

export const fetchAPIEpisode = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/episode/${id}`);

  return data;
};
