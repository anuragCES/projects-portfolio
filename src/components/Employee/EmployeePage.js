import React from 'react';
import EmployeeList from './EmployeeList';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as usersActions from './../../actions/userActions';

class EmployeePage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            employees: this.props.employees
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Employees</h1>
                <EmployeeList employees={this.state.employees}/>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);