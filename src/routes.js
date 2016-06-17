import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/HomePage';
import Projects from './components/Projects/ProjectPage';
import ManageProject from './components/Projects/ManageProject';
import EmployeePage from './components/Employee/EmployeePage';
import Login from './components/Login/LoginPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
        <Route path="projects" component={Projects} />
        <Route path="manageProject" component={ManageProject} />
        <Route path="employees" component={EmployeePage} />
        <Route path="login" component={Login} />
    </Route>
);
