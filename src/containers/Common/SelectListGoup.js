import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({ name, value, error, onChange, options, info }) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control ", { "is-invalid": error })}
        value={value}
        name={name}
        onChange={onChange}
        required
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default SelectListGroup;
