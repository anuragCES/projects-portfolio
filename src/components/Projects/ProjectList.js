import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({projects}) => {
    console.log(projects);
    return (
        <div className="container">
            <h1>Project List</h1>
           {projects.map(project =>
                <ProjectCard key={project.id} project={project}/>
            )}
        </div>
    );
}

export default ProjectList;