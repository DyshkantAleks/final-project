import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { ROUTES } from './routes';
import { AboutPage } from '../About';
import { DeliveryPage } from '../Delivery';
import { Homepage } from '../Homepage';
import { PromotionsPage } from '../Promotions';
import { StoresPage } from '../Stores';
import { CartPage } from '../Cart';
import { FavoritesPage } from '../Favorites';
import { AccountPage } from '../Account';
import { ProductPage } from '../Product';
import { AllProducts } from '../Product/Products';

export const Navigation = () => (
  <Router>
    <Switch>
      {/* <Route path={ROUTES.PRODUCT}>
        <ProductPage/>
      </Route> */}
      <Route path='/products/:name' component={ProductPage} />
      <Route path='/products' component={AllProducts} />
      {/* <Route path={ROUTES.PRODUCTS}>
        <AllProducts/>
      </Route> */}
      <Route path={ROUTES.ABOUT}>
        <AboutPage />
      </Route>
      <Route path={ROUTES.DELIVERY}>
        <DeliveryPage />
      </Route>
      <Route path={ROUTES.PROMOTIONS}>
        <PromotionsPage />
      </Route>
      <Route path={ROUTES.STORES}>
        <StoresPage />
      </Route>
      <Route path={ROUTES.CART}>
        <CartPage />
      </Route>
      <Route path={ROUTES.FAVORITES}>
        <FavoritesPage />
      </Route>
      <Route path={ROUTES.ACCOUNT}>
        <AccountPage />
      </Route>
      <Route path={ROUTES.HOMEPAGE}>
        <Homepage />
      </Route>
    </Switch>
  </Router>
)