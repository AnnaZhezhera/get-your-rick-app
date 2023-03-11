import axios from 'axios';

export const baseUrl = 'https://rickandmortyapi.com/api/character/';

axios.defaults.params = {
  // pages: 40,
};

export const fetchHeroes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const fetchHeroesByUrl = async url => {
  const response = await axios.get(url);
  return response.data;
};

export const getHero = async heroId => {
  const response = await axios.get(`${baseUrl + heroId}`);
  return response.data;
};

// export const getSearchedHero = async name => {
//   const response = await axios.get(
//     `https://rickandmortyapi.com/api/character/?name=${name}`
//   );
//   console.log('getSearchedHero', response.data);
//   return response.data.results;
// };

export const getSearchedHero = async (page, name) => {
  const response = await axios.get(baseUrl + `?page=${page}&name=${name}`);
  console.log('getSearchedHero', response.data);
  return response.data;
};
