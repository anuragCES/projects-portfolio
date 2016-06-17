import React from 'react';
import EmployeeList from './EmployeeList';
import {Link} from 'react-router';

class EmployeePage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            employees: [{
                id: 1
            },{
                id: 2
            },{
                id: 3
            }]
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

export default EmployeePage;