import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { MDBIcon } from "mdbreact";
import {  Select } from "antd";

const { Option } = Select;

const SelectListGroup = ({
  size,
  value,
  error,
  placeholder,
  onChange,
  options,
  label,
  icon,
}) => {
  const selectOptions = options.map((option) => (
    <Option className="black-text" value={option.value}>
      <span role="img" aria-label="Beja">
        <MDBIcon className={option.className} />
      </span>
      {option.label}
    </Option>
  ));
  return (
    <div className="d-flex flex-column align-items-start form-group ">
      <div className="d-flex  mb-3 mt-3">
        <MDBIcon size="lg" icon={icon} className="white-text" />
        &nbsp;&nbsp;
        <label className="white-text">{label}</label>
      </div>
      <Select
        className={classnames( { "is-invalid": error })}
        placeholder={placeholder}
        size={size}
        value={value}
        style={{ width: 300 }}
        onChange={onChange}
      >
        {selectOptions}
      </Select>
      {error && <div className="invalid-tooltip">{error}</div>}
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

SelectListGroup.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default SelectListGroup;
