import type { Show, ShowSearch } from './showModel'
import axios, { AxiosError } from 'axios'

export default async function getSearchShows(search: string): Promise<Show[]> {

  const query = new URLSearchParams({ q: search }).toString();
  const url = `https://api.tvmaze.com/search/shows?${query}`;

  try {
    const response = await axios.get<ShowSearch[]>(url);
    return response.data.map((item) => item.show);
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
}
