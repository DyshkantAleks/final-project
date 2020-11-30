import React from 'react';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { Title } from '../../components/Title/Title';
import { AccountInfo } from '../../components/AccountInfo';
import { ScrollOnTop } from '../../components/ScrollOnTop';

export const AccountPage = () => {
  return (
    <ContentContainer>
      <ScrollOnTop />
      <Title text={'Личные данные'} />
      <AccountInfo />
    </ContentContainer>
  )
};