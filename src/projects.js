const Projects = (() =>
{
    let projectsList = [];

    if (localStorage.getItem('projects') === null)
    {
        projectsList = [ { title: 'Default Project', icon: 'fa-house', color: 'black', tasks: [], }, ];
    } else
    {
        projectsList = JSON.parse(localStorage.getItem('projects'));
    }


    class Project
    {
        constructor(title, icon, color)
        {
            this.title = title;
            this.icon = icon;
            this.color = color;
            this.tasks = [];
        }
    }

    function createProject (title, icon, color)
    {
        const newProject = new Project(title, icon, color);
        projectsList.push(newProject);

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function editProject (index, title, icon, color)
    {
        projectsList[ index ].title = title;
        projectsList[ index ].icon = icon;
        projectsList[ index ].color = color;

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function removeProject (index)
    {
        projectsList.splice(index, 1);

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    return {
        projectsList,
        createProject,
        editProject,
        removeProject,
    };
})();

export default Projects;