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



    function editTask (projectIndex, taskIndex, title, priority, time)
    {
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].title = title;
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].priority = priority;
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].time = time;
        // Projects.projectsList[ projectIndex ].tasks[ taskIndex ].done = done;


        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(Projects.projectsList));

    }
    function removeTask ()
    {
        console.log("Task have been removed");
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
        editTask,
        removeTask,
        listofTask,
    };
})()

export default Tasks;