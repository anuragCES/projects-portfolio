import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
    "use strict";
    return (
         <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="resources" activeClassName="active">Resources</Link>
            {" | "}
            <Link to="about" activeClassName="active">About us</Link>
            {loading}
            {loading && <LoadingDots interval={100} dots={5}/>}
        </nav>
    );
};

Header.propTypes = {
};

export default Header;