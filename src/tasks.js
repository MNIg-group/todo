import Projects from './projects.js';

const Tasks = (() =>
{

    class Task
    {
        constructor(title, priority, time, done)
        {

            this.title = title;
            this.priority = priority;
            this.done = done;
            this.time = time;
        }
    }

    function createTask (projectIndex, title, priority = 'normal', time = '', done, link = title)
    {
        const newTask = new Task(title, priority, time, done);
        Projects.projectsList[ projectIndex ].tasks.push(newTask);
        localStorage.setItem('projects', JSON.stringify(Projects.projectsList));
    }



    function editTask (projectIndex, taskIndex, title, priority, time, done)
    {
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].title = title;
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].priority = priority;
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].time = time;
        Projects.projectsList[ projectIndex ].tasks[ taskIndex ].done = done;


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
        if (localStorage.getItem('inbox') == null)
        {
            for (let x = 0; x < Projects.projectsList.length; x++)
            {
                for (let task of Projects.projectsList[ x ].tasks)
                {
                    inboxList.push(task);
                }
            }
            localStorage.setItem('inbox', JSON.stringify(inboxList));

            return inboxList;
        }
        else
        {
            inboxList = JSON.parse(localStorage.getItem('inbox'));

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