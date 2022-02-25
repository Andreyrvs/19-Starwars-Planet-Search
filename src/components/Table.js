import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import Input from './Input';

const header = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

export default function Table() {
  const { planets, filterByName, setFilterByName } = useContext(TableContext);

  console.log(planets);

  return (
    <div>
      <Input
        inputValue={ filterByName.name }
        name="filterByName"
        handleChange={ ({ target }) => setFilterByName({ name: target.value }) }
        elementId="filter-name"
        dataTest="name-filter"
        type="input"
      />
      <table>
        <thead>
          <tr>
            {header.map((items) => (
              <th key={ items }>
                { items }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater }</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
