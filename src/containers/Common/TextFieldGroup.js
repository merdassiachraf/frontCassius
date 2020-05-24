import React from "react";
import PropTypes from "prop-types";

import { MDBIcon } from "mdbreact";
import { Input } from "antd";

const TextFieldGroup = ({
  name,
  size,
  icon,
  placeholder,
  value,
  label,
  error,
  type,
  onChange,
className}) => {
  return (
    <div className="form-group">
      <div className={className}>
        <MDBIcon size="lg" icon={icon} className="white-text" />
        &nbsp;&nbsp;
        <label className="white-text">{label}</label>
      </div>
      <Input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        size={size}
        placeholder={placeholder}
        prefix={<MDBIcon icon={icon} />}
      />

      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
TextFieldGroup.defaultProps = {
  type: "text",
};
export default TextFieldGroup;
