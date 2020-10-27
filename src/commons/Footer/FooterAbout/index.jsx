import React from 'react';
import {Link} from 'react-router-dom';
import { ROUTES } from '../../../pages/navigation/routes';

export const FooterAbout = () => {
  return (
    <div>
      <p>Информация</p>
      <Link to={ROUTES.ABOUT}>О нас</Link>
      <Link to={ROUTES.PROMOTIONS}>Акции</Link>
    </div>
  )
}