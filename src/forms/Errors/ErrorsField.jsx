import React from 'react';

import { ErrorMessage } from './StyledFormErrorsField';

export const ErrorsField = props => {
  const { error } = props
  
  return (
    <ErrorMessage >
      {error}
    </ErrorMessage>
  )
}
