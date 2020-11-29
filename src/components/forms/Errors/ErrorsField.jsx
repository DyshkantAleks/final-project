import React from 'react';

import { ErrorMessage } from './StyledFormErrorsField';

export const ErrorsField = props => {
  const { errorText } = props;
    
  return (
    <ErrorMessage >
      {errorText}
    </ErrorMessage>
  )
};