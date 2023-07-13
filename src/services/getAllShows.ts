import type { Show } from './showModel'
import axios, { AxiosError } from 'axios'

export default async function getAllShows(page: number): Promise<Show[]> {
  const query = new URLSearchParams({ page: String(page) }).toString();
  const url = `https://api.tvmaze.com/shows?${query}`;

  try {
    const response = await axios.get<Show[]>(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
}
