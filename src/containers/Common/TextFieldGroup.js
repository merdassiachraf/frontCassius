import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { MDBIcon } from "mdbreact";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  type,
  onChange,
  disabled,
  id,
  labelFor,
  icon,
  divClassName,
  max,
}) => {
  return (
    <div className={divClassName + "form-group"}>
      <div className={classnames("field-margin,form-group")}>
        <MDBIcon size="sm" icon={icon} />
        &nbsp;&nbsp;
        <label for={labelFor} className="field-label">
          {label}
        </label>
      </div>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className={classnames("form-control ", { "is-invalid": error })}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        max={max}
        required
      />
      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  divClassName: PropTypes.string.isRequired,
  max: PropTypes.string,
};
TextFieldGroup.defaultProps = {
  type: "text",
};
export default TextFieldGroup;
