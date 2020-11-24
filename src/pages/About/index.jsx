import React from 'react';

import { Header } from '../../commons/Header/Header';
import { AboutText } from './AboutPageComponents/AboutText';
import { Footer } from '../../commons/Footer';
import {ScrollToTop} from '../../commons/ScrollToTop';

export const AboutPage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AboutText />
      <Footer />
    </>
  )
}
