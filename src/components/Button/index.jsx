import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';


export const Button = (props) => {
  const { text, onClick, color, width, disabled } = props;
  return (
    <>
      <StyledButton disabled={disabled} width={width} color={color} onClick={onClick}>{text}</StyledButton>
    </>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: 'Simple text',
  disabled: false,
  onClick: () => {}
}