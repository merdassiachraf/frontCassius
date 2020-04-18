import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { MDBIcon } from "mdbreact";

const InputGroup = ({
  name,
  value,
  error,
  onChange,
  options,
  icon,
  type,
  placeholder,
}) => {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <MDBIcon icon={icon} />
        </span>
      </div>
      <input
        placeholder={placeholder}
        className={classnames("form-control ", { "is-invalid": error })}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>

      {error && <div class="invalid-tooltip">{error}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
