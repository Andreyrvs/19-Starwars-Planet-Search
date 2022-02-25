import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import TableContext from './TableContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planets, setPlanets] = useState([]);

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
    async function api() {
      const result = await fetchAPI();
      setData(result);
    }
    api();
  }, []);

  const value = {
    data, filterByName, setFilterByName, planets,
  };

  return (
    <main>
      <TableContext.Provider value={ value }>
        {children}
      </TableContext.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequire;

export default Provider;
