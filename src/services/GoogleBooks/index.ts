import GoogleBook from './GoogleBook';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchVolumes = async (
  query: string
): Promise<Array<GoogleBook>> => {
  try {
    const response = await fetch(`${API_URL}?q=${query}`);
    const { data } = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
