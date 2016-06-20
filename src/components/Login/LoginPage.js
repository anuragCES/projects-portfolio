import React from 'react';
import LoginForm from './LoginForm'; 
import * as userActions from './../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends React.Component {

    constructor(props, context){
        super(props, context);
        // TODO: This should be in the initial state JS
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }

        this.updateUserState = this.updateUserState.bind(this);
        this.authorizeUser = this.authorizeUser.bind(this);
    }

    updateUserState(event) {
        const field = event.target.name;
        let credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    authorizeUser(event) {
        event.preventDefault();
        this.props.actions.checkUser(this.state.credentials);
    }

    render(){
        return (
            <LoginForm 
                credentials={this.state.credentials} 
                login={this.authorizeUser}
                onChange={this.updateUserState}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);