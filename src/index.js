import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory} from 'react-router';
import Routes from './routes';
import 'jquery';
//import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('app')
);