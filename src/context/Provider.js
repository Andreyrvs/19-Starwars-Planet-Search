import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);
  console.log(planets);
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
