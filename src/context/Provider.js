import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
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

  useEffect(() => {
    const { comparison, value, column } = filterByNumericValues;

    if (comparison === 'maior que') {
      const maior = data.filter((planet) => (
        Number(planet[column]) > Number(value)
        && planet[column] !== 'unknown'
      ));
      setPlanets(maior);
    } else if (comparison === 'menor que') {
      const menor = data.filter((planet) => (
        Number(planet[column]) < Number(value)
        && planet[column] !== 'unknown'
      ));
      setPlanets(menor);
    } else if (comparison === 'igual a') {
      const igual = data.filter((planet) => (
        Number(planet[column]) === (Number(value))
        && planet[column] !== 'unknown'
      ));
      setPlanets(igual);
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
