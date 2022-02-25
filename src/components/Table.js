import React, { useContext } from 'react';
import Context from '../context/Context';
import header from '../data';

export default function Table() {
  const { planets } = useContext(Context);

  return (
    <table className="table table-bordered table-dark table-striped">
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
  );
}
