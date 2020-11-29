import React from 'react';

import { ErrorMessage } from './StyledFormErrorsField';

export const ErrorsField = props => {
  const { errors = [] } = props
  const errorList = errors.map(error => <p>{error}</p>)
  return (
    <ErrorMessage >
      {errorList}
    </ErrorMessage>
  )
}
