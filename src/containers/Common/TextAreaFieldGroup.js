import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({ name, placeholder, value, error, onChange,info }) => {
  return (
    <div className="form-group">
      <textarea
        placeholder={placeholder}
        className={classnames("form-control ", { "is-invalid": error })}
        value={value}
        name={name}
        onChange={onChange}
        required
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  divClassName: PropTypes.string.isRequired,
};

export default TextAreaFieldGroup;
