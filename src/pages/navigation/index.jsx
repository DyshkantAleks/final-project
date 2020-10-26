import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {ROUTES} from './routes';
import {AboutPage} from '../About';

import {DeliveryPage} from '../Delivery';
import {Homepage} from '../Homepage';
import {PromotionsPage} from '../PromotionsList';
import {StoresPage} from '../Stores';
import {CartPage} from '../Cart';
import {FavoritesPage} from '../Favorites';
import {AccountPage} from '../Account';
import {ProductPage} from '../Product';
import {PromotionsSinglePage} from "../PromotionsSingle";
import {ProductListPage} from "../ProductList/ProductListPage";

export const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.PRODUCT} component={ProductPage}/>
      <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
      <Route exact path={ROUTES.DELIVERY} component={DeliveryPage}/>
      <Route exact path={ROUTES.PROMOTIONS} component={PromotionsPage}/>
      <Route exact path={ROUTES.STORES} component={StoresPage}/>
      <Route exact path={ROUTES.CART} component={CartPage}/>
      <Route exact path={ROUTES.FAVORITES} component={FavoritesPage}/>
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
      <Route path="/promo/:route" component={PromotionsSinglePage}/>
      <Route path="/:route" component={ProductListPage}/>
      {/*<Route path="/products/:route" render={(props) => <ProductListPage {...props} title={`props from Link`}/>} />*/}
      <Route exact path={ROUTES.HOMEPAGE} component={Homepage}/>
    </Switch>
  </Router>
)