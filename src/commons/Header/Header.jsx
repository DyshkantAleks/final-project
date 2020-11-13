import React from 'react';
import { InfoLinks } from './InfoLinks/InfoLinkList';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Logo } from './Logo/Logo';
import { AccountInfoList } from './AccountInfo/AccountInfoList';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { CatalogList } from './Catalog/CatalogList';
import { HeaderContainer } from './StyledHeader';

export const Header = () => {
  const { screenWidth } = useWindowDimensions();
  return (
    <>
      <HeaderContainer>
        {screenWidth >= 1200 && (
          <InfoLinks />
        )}
        <Logo />
        <MobileMenu />
        <AccountInfoList />
      </HeaderContainer>
      {screenWidth >= 1200 && (
        <CatalogList />
      )}
    </>
  )
}

