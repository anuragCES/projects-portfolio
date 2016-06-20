import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './../../actions/projectActions';

class HomePage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.props.actions.loadProjects();
    }

    render() {
        return (
            <div className="jumbotron">
                <h3>Welcome {this.props.firstname},</h3>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        firstname: state.user.firstName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);