/**
  This is an awesome looking button for React.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./index.scss";

const Button = (props) => {
  const { className, type, ...restProps  } = props;

  return (
    <button
      className={classNames(
        "button", {
          [`button_${type}`]: type,
          "is-disabled": restProps.disabled
        }
      )}
      {...restProps}
    />
  )
}

Button.propTypes = {
  /**
   *  不同的按钮类型： primary | success | warning
   */
  type: PropTypes.oneOf(['primary', 'success', 'warning']),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  type: "primary"
}

export default Button;
