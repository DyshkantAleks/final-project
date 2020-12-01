import React from 'react';
import {LoaderContainer, LoaderText, Preloader} from './StyledLoader';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Preloader />
      <LoaderText>Загрузка...</LoaderText>
    </LoaderContainer>
  )
};