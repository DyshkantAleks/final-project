import React from 'react';
import './mobileMenu.scss';
import {slide as Menu} from 'react-burger-menu'
import {InfoLinks} from '../InfoLinks/InfoLinkList';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import {CatalogList} from '../Catalog/CatalogList';

export const MobileMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <>
      {width < 1200 && (
        <Menu>
          <CatalogList/>
          <InfoLinks/>
        </Menu>

      )}
    </>
  )
};
