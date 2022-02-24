import React, { useContext, useEffect } from 'react';
import TableContext from '../context/TableContext';

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
  const { data } = useContext(TableContext);

  // console.log(data);
  useEffect(() => {}, []);
  return (
    <div>
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
          {data.map(({
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
