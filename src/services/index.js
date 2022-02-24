const URL_API = ' https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  console.log(data.results);
  return data.results;
};

export default fetchAPI;
