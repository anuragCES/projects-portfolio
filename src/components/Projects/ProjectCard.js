import React from 'react';

const ProjectCard = ({project}) => {
    console.log(project);
    return (
        <div className="card">
            <img className="card-img-top" data-src="..." alt="Card image cap" />
            <div className="card-block">
                <span className="label label-pill label-default">{project.id}</span>
                <p className="card-text">{project.id}</p>
                <a href="#" className="btn btn-primary">View</a>
            </div>
        </div>
    );
}

export default ProjectCard;