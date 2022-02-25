import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import TableContext from './TableContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planetName, setPlanetName] = useState([]);

  useEffect(() => {
    const nameToLowerCase = filterByName.name.toLowerCase();

    if (nameToLowerCase === '') {
      setPlanetName(data);
    } else {
      const filter = data
        .filter((planeta) => (planeta.name.toLowerCase().includes(nameToLowerCase)));
      setPlanetName(filter);
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
    data, filterByName, setFilterByName, planetName,
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
