import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { MDBIcon } from "mdbreact";

const InputGroup = ({
  name,
  value,
  error,
  onChange,
  icon,
  color,
  placeholder,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <MDBIcon className={color} fab icon={icon} />
        </span>
      </div>
      <input
        placeholder={placeholder}
        className={classnames("form-control social-input-text", {
          "is-invalid": error,
        })}
        value={value}
        name={name}
        onChange={onChange}
        style={{ borderRadius: 10 }}
      />
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
