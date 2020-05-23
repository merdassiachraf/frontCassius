import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { MDBIcon } from "mdbreact";

const TextFieldGroup = ({
  name,
  icon,
  placeholder,
  value,
  label,
  error,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="form-group">
      <div className="d-flex  mb-3 mt-3">
        <MDBIcon size="lg" icon={icon} className="white-text" />
        &nbsp;&nbsp;
        <label className="white-text">
          {label}
        </label>
      </div>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className={classnames("form-control form-control-lg", { "is-invalid": error })}
        value={value}
        name={name}
        onChange={onChange}
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
  disabled: PropTypes.string,
  labelFor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
TextFieldGroup.defaultProps = {
  type: "text",
};
export default TextFieldGroup;
