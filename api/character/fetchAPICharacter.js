import axios from "axios";
import { BASE_URL } from "..";

export const fetchAPICharacter = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/character/${id}`);

  return data;
};
