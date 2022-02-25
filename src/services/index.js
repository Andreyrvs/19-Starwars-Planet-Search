const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  try {
    const response = await fetch(URL_API);
    const dataJson = await response.json();
    const data = dataJson.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
