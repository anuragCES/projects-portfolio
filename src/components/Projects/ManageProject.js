import React from 'react';
import ProjectForm from './ProjectForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './../../actions/projectActions';

class ManageProject extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            project: Object.assign({}, props.project),
            errors: {},
            saving: false
        };

        this.onChange = this.onChange.bind(this);
        this.saveProject = this.saveProject.bind(this);
    }

    onChange(event){
        const field = event.target.name;
        let project = this.state.project;
        project[field] = event.target.value;
        return this.setState({project: project});
    }

    saveProject(event){
        event.preventDefault();
        console.log(this.state.project);
        this.props.actions.saveProject(this.state.project);
    }

    render() {
        return (
            <div className="container">
                <ProjectForm 
                    project={this.state.project} 
                    employees={this.state.employees} 
                    onSave={this.saveProject} 
                    onChange={this.onChange}
                />
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    let project = {
        id: '',
        title: '',
        authorId: '',
        category: '',
        summary: ''
    };
    return {
        project
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProject);