import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from './Input';
import header from '../data';

export default function Form() {
  const {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(Context);

  console.log(filterByNumericValues);

  return (
    <form>
      <fieldset>
        <Input
          inputValue={ filterByName.name }
          name="filterByName"
          handleChange={ ({ target }) => setFilterByName({ name: target.value }) }
          elementId="filter-name"
          dataTest="name-filter"
          type="text"
          labelName="Planet Name"
        />

        <label htmlFor="filter-column" className="m-1">
          coluna
          <select
            data-testid="column-filter"
            className="form-select"
            id="filter-column"
            value={ filterByNumericValues.column }
            onChange={
              ({ target }) => setFilterByNumericValues({ column: target.value })
            }
          >
            {header.map((item) => (
              <option key={ item }>{item}</option>
            ))}
          </select>
        </label>

        <label htmlFor="filter-comparison" className="m-1">
          Operador
          <select
            data-testid="comparison-filter"
            className="form-select"
            id="filter-comparison"
            value={ filterByNumericValues.comparison }
            onChange={
              ({ target }) => setFilterByNumericValues({ comparison: target.value })
            }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <Input
          dataTest="value-filter"
          type="number"
          labelName="Value"
          name="filterByNumericValues.value"
          value={ filterByNumericValues.value }
          handleChange={
            ({ target }) => setFilterByNumericValues({ value: target.value })
          }
        />

        <button
          className="btn btn-success m-1"
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}
