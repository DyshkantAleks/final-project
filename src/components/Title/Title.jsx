import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle } from './StyledTitle';


export const Title = (props) => {
  const { text } = props
  return (
    <MainTitle>{text}</MainTitle>
  )
}

Title.propTypes = {
  text: PropTypes.string

};

Title.defaultProps = {
  text: 'Заголовок'
};

