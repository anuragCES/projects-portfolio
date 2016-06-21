import React from 'react';

const ProjectCard = ({project, deleteProject}) => {
    console.log(project);
    return (
        <div className="jumbotron">
            <div className="card-block">
                <span className="label label-pill label-default">{project.id}</span>
                <p className="card-text">{project.title}</p>
                <p className="card-text">{project.summary}</p>
                <a href="#" className="btn btn-primary" onClick={deleteProject}>Delete</a>
            </div>
        </div>
    );
}

export default ProjectCard;