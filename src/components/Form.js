import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Input from './Input';
import { operatorDropdown } from '../data';

export default function Form() {
  const {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(Context);

  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [value, setValue] = useState('0');
  // const [columnDropdown, setColumnDropdown] = useState(operatorDropdown);
  // setColumnDropdown(operatorDropdown);
  // console.log(setColumnDropdown);
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
            value={ column }
            onChange={
              ({ target }) => setColumn(target.value)
            }
          >
            {
              operatorDropdown.filter((elemento) => filterByNumericValues
                .every((el) => el.column !== elemento))
                .map((item, index) => (
                  <option key={ index } value={ item }>{item}</option>
                ))
            }
          </select>
        </label>

        <label htmlFor="filter-comparison" className="m-1">
          Operador
          <select
            data-testid="comparison-filter"
            className="form-select"
            id="filter-comparison"
            value={ comparison }
            onChange={
              ({ target }) => setcomparison(target.value)
            }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <Input
          dataTest="value-filter"
          type="number"
          labelName="Value"
          elementId="filter-value"
          name="value"
          inputValue={ value }
          handleChange={
            ({ target }) => setValue(target.value)
          }
        />

        <button
          className="btn btn-success m-1"
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setFilterByNumericValues([...filterByNumericValues, {
              column,
              comparison,
              value,
            }]);
          } }
        >
          Filtrar
        </button>
      </fieldset>
      <section>
        {filterByNumericValues.map((element, index) => (
          <span
            style={ { display: 'flex' } }
            key={ index }
          >
            {`${element.column} ${element.comparison} ${element.value} `}

          </span>
        ))}
      </section>
    </form>
  );
}
