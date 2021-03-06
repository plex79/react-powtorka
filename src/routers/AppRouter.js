import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import App from '../components/App';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Weather from '../components/Weather';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/pogoda" component={Weather} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;