import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from './Input';

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
      </fieldset>
    </form>
  );
}
