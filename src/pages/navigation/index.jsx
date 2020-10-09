import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


import { ROUTES } from './routes';
import {AboutPage} from "../About";
import {DeliveryPage} from "../Delivery";
import {Homepage} from "../Homepage";
import {PromotionsPage} from "../Promotions";
import {StoresPage} from "../Stores";



export const Navigation = () => (
    <Router>
        <Switch>
            <Route path={ROUTES.ABOUT}>
                <AboutPage/>
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
            <Route path={ROUTES.HOMEPAGE}>
                <Homepage />
            </Route>
        </Switch>
    </Router>
)