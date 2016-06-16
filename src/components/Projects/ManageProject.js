import React from 'react';
import ProjectForm from './ProjectForm';

class ManageProject extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            project: [],
            employees: []
        };
    }

    render() {
        return (
            <div className="container">
                <ProjectForm project={this.state.project} employees={this.state.employees}/>
            </div>
        );
    };
}

export default ManageProject;