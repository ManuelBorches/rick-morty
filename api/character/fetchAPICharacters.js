import axios from "axios";
import { BASE_URL } from "..";

export const fetchAPICharacters = async (page, name, status, gender) => {
  const { data } = await axios.get(`${BASE_URL}/character/`, {
    params: {
      page,
      name,
      status,
      gender,
    },
  });

  return data;
};
