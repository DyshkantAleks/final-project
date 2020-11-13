import React from 'react';

import { Header } from '../../commons/Header/Header';
import { Footer } from '../../commons/Footer';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ScrollToTop } from '../../components/ScrollToTop';
import { Title } from '../../components/Title/Title';
import { AccountInfo } from '../../components/AccountInfo';

export const AccountPage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContainer>
        <Title text={'Личные данные'} />
        <AccountInfo />
      </ContentContainer>
      <Footer />
    </>
  )
};