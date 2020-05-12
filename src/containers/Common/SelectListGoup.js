import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  value,
  error,
  placeholder,
  onChange,
  options,
}) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group col-md-13 ">
      <select
        className={classnames("form-control ", { "is-invalid": error })}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      >
        {selectOptions}
      </select>
      {error && <div className="invalid-tooltip">{error}</div>}
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default SelectListGroup;
