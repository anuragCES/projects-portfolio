import React from 'react';
import Header from './common/Header';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class App extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <div className="container-fluid">
                 {
                    this.props.loggedIn ? (
                        <Header />
                    ) : (
                        <Link to="/login">Sign in</Link>
                    )
                }
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state, ownProp) {
    return {
        loggedIn: Object.keys(state.user).length>0
    };
}

export default connect(mapStateToProps)(App);