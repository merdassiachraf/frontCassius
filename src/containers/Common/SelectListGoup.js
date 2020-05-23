import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { MDBIcon } from "mdbreact";

const SelectListGroup = ({
  name,
  value,
  error,
  placeholder,
  onChange,
  options,
  label,
  icon
}) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group ">
       <div className="d-flex mb-3 mt-3">
        <MDBIcon className="white-text" size="lg" icon={icon} />
        &nbsp;&nbsp;
        <label className="white-text">
          {label}
        </label>
      </div>
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
