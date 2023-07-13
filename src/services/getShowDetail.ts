import type { Show } from './showModel'
import axios, { AxiosError } from 'axios'

export default async function getShowDetail(id: number, embed?: string[]): Promise<Show> {
  let url = `https://api.tvmaze.com/shows/${id}`;

  try {
    if (embed && embed.length > 0) {
      const response = await axios.get<Show>(url, {
        params: {
          embed
        }
      });
      return response.data;
    } else {
      const response = await axios.get<Show>(url);
      return response.data;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
}
