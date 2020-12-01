import React from 'react';

import { RegisterForm } from './RegisterForm';

export const RegisterComponent = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};