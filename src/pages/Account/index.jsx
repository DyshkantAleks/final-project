import React from 'react';

import { Header } from '../../commons/Header/Header';
import { Footer } from '../../commons/Footer';
import { ContentContairer } from '../../components/Content/Content';
import { ScrollToTop } from '../../components/ScrollToTop';
import { Title } from '../../components/Title/Title';
import { AccountInfo } from '../../components/AccountInfo';

export const AccountPage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContairer>
        <Title text={'Личные данные'} />
        <AccountInfo />
      </ContentContairer>
      <Footer />
    </>
  )
};