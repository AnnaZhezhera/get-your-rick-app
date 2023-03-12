import axios from 'axios';

export const baseUrl = 'https://rickandmortyapi.com/api/character/';

axios.defaults.params = {
  // pages: 40,
};

export const fetchHeroes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getHero = async heroId => {
  const response = await axios.get(`${baseUrl + heroId}`);
  return response.data;
};

export const getSearchedHero = async (page, name) => {
  const response = await axios.get(baseUrl + `?page=${page}&name=${name}`);
  return response.data;
};
