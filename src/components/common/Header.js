import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    "use strict";
    return (
        <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="employees" activeClassName="active">Employees</Link>
            {" | "}
            <Link to="projects" activeClassName="active">Projects</Link>
            {loading}
            {loading && <LoadingDots interval={100} dots={5}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;