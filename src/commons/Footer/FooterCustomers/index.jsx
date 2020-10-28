import React from 'react';
import {Link} from 'react-router-dom';
import { ROUTES } from '../../../pages/navigation/routes';

export const FooterCustomers = () => {
  return (
    <div>
      <p>Покупателям</p>
      <Link to={ROUTES.DELIVERY}>Доставка</Link>
      <Link to={ROUTES.STORES}>Наши магазины</Link>
    </div>
  )
}