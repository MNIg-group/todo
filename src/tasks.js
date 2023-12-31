import Projects from './projects.js';

const Tasks = (() =>
{

    class Task
    {
        constructor(title, priority, time, done, link)
        {

            this.title = title;
            this.priority = priority;
            this.done = done;
            this.time = time;
            this.link = link;
        }
    }

    function createTask (projectIndex, title, priority = 'normal', time, done = 'false')
    {
        let link = Projects.projectsList[ projectIndex ].title;
        const newTask = new Task(title, priority, time, done, link);
        Projects.projectsList[ projectIndex ].tasks.push(newTask);
        localStorage.setItem('projects', JSON.stringify(Projects.projectsList));
    }


    //  Gain list of tasks from local storage
    let inboxList = [];
    function listofTask ()
    {
        try
        {
            for (let x = 0; x < Projects.projectsList.length; x++)
            {
                for (let task of Projects.projectsList[ x ].tasks)
                {
                    inboxList.push(task);
                }
            }
            localStorage.removeItem('inbox');
            localStorage.setItem('inbox', JSON.stringify(inboxList));

        } catch (error)
        {
            console.error(error);
        }
        finally
        {

            return inboxList;
        }
    }

    return {
        createTask,
        listofTask,
    };
})()

export default Tasks;