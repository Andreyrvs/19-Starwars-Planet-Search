import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    { column: '',
      comparison: '',
      value: '',
    },
  );

  useEffect(() => {
    async function api() {
      const result = await fetchAPI();
      setData(result);
    }
    api();
  }, []);

  useEffect(() => {
    const nameToLowerCase = filterByName.name.toLowerCase();

    if (nameToLowerCase === '') {
      setPlanets(data);
    } else {
      const filter = data
        .filter((planeta) => (planeta.name.toLowerCase().includes(nameToLowerCase)));
      setPlanets(filter);
    }
  }, [filterByName.name, data]);

  data.filter((planet) => (
    console.log(planet[filterByNumericValues.column])
  ));

  useEffect(() => {
    if (filterByNumericValues.comparison === 'maior que') {
      const column = data.filter((planet) => (
        planet[filterByNumericValues.column] > filterByNumericValues.value
         && planet[filterByNumericValues.column] !== 'unknown'
      ));
      setPlanets(column);
    }
  }, [filterByNumericValues, data]);

  const value = {
    data,
    filterByName,
    setFilterByName,
    planets,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequire;

export default Provider;
