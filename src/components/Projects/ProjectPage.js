import React from 'react';
import ProjectList from './ProjectList';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './../../actions/projectActions';

class ProjectPage extends React.Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        let temp = [{
                id: 1
            },{
                id: 2
            },{
                id: 3
            }];
        console.log(this.props.projects);
        console.log(temp);
        return (
            <div className="container">
                <h1>Projects</h1>
                <Link to="manageProject" className="btn btn-primary btn-lg">Add Project</Link>
                <ProjectList projects={this.props.projects}/>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        projects: state.project
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);