import React from 'react';
import PropTypes from 'prop-types';

import { StaticImageContainer, StaticImage, StaticTitle, StaticSubtitle } from '../../StyledPopularCategory';

export const StaticCategoryItem = (props) => {
  const { textForTitle, textForSubtitle, backGround } = props;

  return (
    <>
      <StaticImageContainer>
        <StaticImage src={backGround} />
      </StaticImageContainer>
      <StaticTitle>{textForTitle}</StaticTitle>
      <StaticSubtitle>{textForSubtitle}</StaticSubtitle>
    </>
  )
};

StaticCategoryItem.propTypes = {
  textForTitle: PropTypes.string,
  textForSubtitle: PropTypes.string,
  backGround: PropTypes.string
};