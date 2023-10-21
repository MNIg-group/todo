import Tasks from "./tasks";
import Projects from "./projects";


let list = Tasks.listofTask();
export function deleteTable (table, type)
{
    if (type == "week")
    {
        for (let box of list)
        {
            if (box.time <= 168)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                table.appendChild(list);
            }
        }
        return
    } else if (type == "important")
    {
        for (let box of list)
        {
            if (box.priority == 'high' || box.priority == 'High')
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                table.appendChild(list);
            }
        }
        return
    } else if (type == 'completed')
    {
        for (let box of list)
        {
            if (box.done == true)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                table.appendChild(list);
            }
        }
        return
    }
    else
    {
        for (let box of list)
        {
            let list = document.createElement('tr');
            list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
            table.appendChild(list);
        }
        return
    }

}

export function editTaskUI (arr)
{
    for (let button of arr)
    {
        button.addEventListener('click', () =>
        {
            let taskName = button.parentNode.parentNode.firstChild.innerText;
            let projectId = 0;
            let taskId = arr.indexOf(button);
            let Header = localStorage.getItem('Header');

            if (Projects.projectsList.includes(Header) == false)
            {
                projectId = 0;
                for (let proje of Projects.projectsList)
                {
                    if (proje.tasks.includes(taskName))
                    {
                        console.log(Projects.projectsList.indexOf(proje));
                    }
                }
                Tasks.editTask(projectId, taskId);
                return
            } else
            {
                console.log(Projects.projectsList);
            }
        })
    }
}
export function deleteTaskUI (arr)
{
    for (let button of arr)
    {
        button.addEventListener('click', () =>
        {
            console.log("Deleted!");
        })
    }
}