import React from 'react';
import PropTypes from 'prop-types';

function Input({
  name,
  elementId,
  dataTest,
  handleChange,
  inputValue,
  type,
  labelName,
}) {
  return (
    <label htmlFor={ elementId } className="form-label m-1">
      {labelName}
      <input
        className="form-control"
        name={ name }
        value={ inputValue }
        onChange={ handleChange }
        id={ elementId }
        data-testid={ dataTest }
        type={ type }
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  elementId: PropTypes.string,
  dataTest: PropTypes.string,
  handleChange: PropTypes.func,
  filterByName: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
}.isRequire;

export default Input;
