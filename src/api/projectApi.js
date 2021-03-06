const projects = [
    {
        id: 'project-1',
        title: 'Project 1',
        authorId: '1',
        category: '',
        summary: ''
    },
    {
        id: 'project-2',
        title: 'Project 2',
        authorId: '2',
        category: '',
        summary: ''
    },
    {
        id: 'project-3',
        title: 'Project 3',
        authorId: '3',
        category: '',
        summary: ''
    }
];

class projectApi {

    static getProjects(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(Object.assign([], projects));
            }, 1000);
        });
    }

    static saveProject(project) {
        project = Object.assign({}, project); // to avoid manipulating 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    project.id = 'project-'+(projects.length + 1);
                    projects.push(project);
                    console.log(projects);
                    resolve(projects);
            }, 1000);
        });
    }
    
    static deleteProject(projectId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfProjectToDelete = projects.findIndex(project => {
                    project.authorId == projectId;
                });
                projects.splice(indexOfProjectToDelete, 1);
                resolve();
            }, 1000);
        });
    }
}

export default projectApi;