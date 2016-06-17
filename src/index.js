import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import Routes from './routes';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';


// We dont need to initialze store because we are providing default value to each reducer
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
    document.getElementById('app')
);