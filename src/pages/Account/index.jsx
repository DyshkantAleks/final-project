import React from 'react';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { Title } from '../../components/Title/Title';
import { AccountInfo } from '../../components/AccountInfo';

export const AccountPage = () => {
  return (
    <ContentContainer>
      <Title text={'Личные данные'} />
      <AccountInfo />
    </ContentContainer>
  )
};