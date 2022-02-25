import React from 'react';
import PropTypes from 'prop-types';

function Input({
  name,
  elementId,
  dataTest,
  handleChange,
  filterByName,
  type,
}) {
  return (
    <label htmlFor={ elementId }>
      <input
        name={ name }
        value={ filterByName }
        onChange={ handleChange }
        id={ elementId }
        data-testid={ dataTest }
        type={ type }
      />
    </label>
  );
}

Input.propTypes = {
  // inputValue: PropTypes.string,
  name: PropTypes.string,
  elementId: PropTypes.string,
  dataTest: PropTypes.string,
  // handleChange: PropTypes.func,
  type: PropTypes.string,
}.isRequire;

export default Input;
