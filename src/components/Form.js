import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from './Input';
import header from '../data';

export default function Form() {
  const { filterByName, setFilterByName } = useContext(Context);

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

        <label htmlFor="filter-column">
          coluna
          <select
            data-testid="column-filter"
            className="form-select"
            id="filter-column"
          >
            {header.map((item) => (
              <option key={ item }>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="filter-comparison">
          Operador
          <select
            data-testid="comparison-filter"
            className="form-select"
            id="filter-comparison"
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <Input
          dataTest="value-filter"
          type="text"
        />
      </fieldset>
    </form>
  );
}
