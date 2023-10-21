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


    return {
        newProject,
        createTask,
    };
})();

export default Handler;