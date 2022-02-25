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
        <select className="form-select" data-testid="column-filter">
          {header.map((item) => (
            <option key={ item }>{item}</option>
          ))}
        </select>

        {/* <select className="form-select" data-testid="column-filter">
          <option>batatas</option>
        </select> */}
      </fieldset>
    </form>
  );
}
