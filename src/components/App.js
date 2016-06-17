import React from 'react';
import Header from './common/Header';
import {Link} from 'react-router';

class App extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            loggedIn : false
        }
    }

    render(){
        return (
            <div className="container-fluid">
                 {
                    this.state.loggedIn ? (
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

export default App;