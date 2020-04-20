import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { MDBIcon } from "mdbreact";

const InputGroup = ({
  name,
  value,
  errors,
  onChange,
  icon,
  color,
  placeholder,
}) => {

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
        <MDBIcon className={color} fab icon={icon} />        </span>
      </div>
      <input
        placeholder={placeholder}
        className={classnames("form-control ", { "is-invalid": errors })}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errors && <div class="invalid-tooltip">{errors}</div>}
      <div class="valid-tooltip">Looks good!</div>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
