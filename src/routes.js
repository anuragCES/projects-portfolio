import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
    </Route>
);
