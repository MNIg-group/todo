import Projects from "./projects";
import Tasks from "./tasks";


const Handler = (() =>
{
    function newProject (title, icon, color)
    {
        Projects.createProject(title, icon, color);
    }

    function createTask (projectIndex, title, priority = 'normal', time)
    {
        Tasks.createTask(projectIndex, title, priority, time);
    }
    function editTask (project, task, title, priority, time)
    {
        Tasks.editTask(project, task, title, priority, time);
    }

    return {
        newProject,
        createTask,
        editTask,
    };
})();

export default Handler;