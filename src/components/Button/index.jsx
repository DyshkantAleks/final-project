import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';

export const Button = (props) => {
  const { text, onClick, color, width, disabled, center } = props;
  return (
    <>
      <StyledButton disabled={disabled} center={center} width={width} color={color} onClick={onClick}>{text}</StyledButton>
    </>
  )
};

Button.defaultProps = {
  text: 'Simple text',
  disabled: false,
  onClick: () => { }
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  center: PropTypes.string,
  onClick: PropTypes.func
};