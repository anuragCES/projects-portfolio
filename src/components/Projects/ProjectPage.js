import React from 'react';
import ProjectList from './ProjectList';
import {Link} from 'react-router';

class ProjectPage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            projects: [{
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
                <h1>Projects</h1>
                <Link to="manageProject" className="btn btn-primary btn-lg">Add Project</Link>
                <ProjectList projects={this.state.projects}/>
            </div>
        );
    };
}

export default ProjectPage;