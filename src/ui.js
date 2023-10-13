import './style.css';
import Projects from './projects';
import Tasks from './tasks';
import Handler from './formHandler';

// fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const UI = (() =>
{
    //When The Page reload

    window.onload = () =>
    {

        mainHeader.innerText = `Inbox`;
        mainPage.lastChild.replaceWith(inboxProjectList);


        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = inboxProjectList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                inboxProjectList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }
        for (let box of list)
        {
            let list = document.createElement('tr');
            list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
            inboxProjectList.appendChild(list);
        }

        mainPage.lastChild.replaceWith(inboxProjectList);
        console.info("The webpage was fully loaded!");
    }

    // Important forms ------------------------------------------------------
    //   Add New Project +++++++++++++++++++++++++++++++++++++++++++++++++++++
    const AddProject = document.createElement('form');
    AddProject.classList.add('form');
    AddProject.action = "";
    AddProject.id = `ProjectForm`;

    const ProjectTitle = document.createElement('div');
    const ProjectTitle_label = document.createElement('label');
    ProjectTitle_label.for = `Project_title`;
    ProjectTitle_label.innerText = `Project Title`;
    ProjectTitle_label.classList.add('head');
    const ProjectTitle_input = document.createElement('input');
    ProjectTitle_input.type = `text`;
    ProjectTitle_input.id = `Project_title`;
    ProjectTitle_input.name = `Project_title`;
    ProjectTitle_input.autocomplete = `off`;
    ProjectTitle_input.placeholder = `e.g. Website`;

    ProjectTitle.appendChild(ProjectTitle_label);
    ProjectTitle.appendChild(ProjectTitle_input);

    const ProjectIcon = document.createElement('div');
    ProjectIcon.classList.add('project-icons');
    const ProjectIcon_head = document.createElement('label');
    ProjectIcon_head.innerText = `Project Icon`;
    ProjectIcon_head.classList.add('head');

    let icon_group = document.createElement('form');
    icon_group.classList.add('icon-group');

    let ProjectIcons = [ "fa-home", "fa-calendar-days", "fa-calendar-day", "fa-car", "fa-building", "fa-graduation-cap" ];
    for (let icon of ProjectIcons)
    {
        let radio = document.createElement('input');
        radio.value = `${ icon }`;
        radio.type = `radio`;
        radio.id = `${ icon }`;
        radio.name = `icon`;

        let label = document.createElement('label');
        label.for = `${ icon }`;
        let iconImg = document.createElement('i');
        iconImg.classList.add('fa');
        iconImg.classList.add('fa-solid');
        iconImg.classList.add(`${ icon }`);
        iconImg.ariaHidden = `true`;
        iconImg.style.cursor = `pointer`;
        radio.addEventListener('change', () =>
        {

            let group_of_icons = radio.parentElement.parentElement;

            for (label of group_of_icons)
            {

                label.nextSibling.classList.remove('radio-focus');
                if (label.checked)
                {
                    label.nextSibling.classList.add('radio-focus');
                }
            }

        })
        label.appendChild(radio);
        label.appendChild(iconImg);
        icon_group.appendChild(label);

    }


    ProjectIcon.appendChild(ProjectIcon_head);
    ProjectIcon.appendChild(icon_group);

    const ProjectColor = document.createElement('div');
    const ProjectColor_head = document.createElement("label");
    ProjectColor_head.innerText = `Project Color`;
    ProjectColor_head.for = `proColor`;
    const Color = document.createElement('input');
    Color.type = `color`;
    Color.id = `proColor`;
    Color.name = 'ProjectColor';
    Color.value = `#00ffff`;
    Color.style.outline = `none`;
    Color.style.border = `none`;

    ProjectColor.appendChild(ProjectColor_head);
    ProjectColor.appendChild(Color);


    const ProjectHeader = document.createElement('h1');
    ProjectHeader.innerText = `Add New Project`;
    const closespan = document.createElement('span');
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    closeBtn.addEventListener('click', () =>
    {
        AddProject.classList.toggle('hidden');
        bed_of_form.classList.toggle('hidden');
    })
    closespan.appendChild(closeBtn);
    ProjectHeader.appendChild(closespan);
    ProjectHeader.classList.add('form-header');

    const ProjectSubmit = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = `submit`;
    submitBtn.innerText = `Submit`;
    ProjectSubmit.appendChild(submitBtn);
    submitBtn.addEventListener('click', () =>
    {
        let title = document.getElementById('Project_title').value;

        let selectedIcon;
        let icon = document.getElementsByName('icon');
        for (let i = 0; i < icon.length; i++)
        {
            if (icon[ i ].checked)
            {
                selectedIcon = icon[ i ].value;
            }
        }

        let color = document.getElementById('proColor').value;

        Handler.newProject(title, selectedIcon, color);
        document.getElementById('ProjectForm').reset();
    })

    AddProject.appendChild(ProjectHeader);
    AddProject.appendChild(ProjectTitle);
    AddProject.appendChild(ProjectIcon);
    AddProject.appendChild(ProjectColor);
    AddProject.appendChild(ProjectSubmit);
    AddProject.classList.toggle('hidden');


    //Add New Task into the Project ---------------------------------------------

    const AddTask = document.createElement('form');
    AddTask.classList.add('form');
    AddTask.action = "";
    AddTask.id = `TaskForm`;

    const TaskTitle = document.createElement('div');
    const TaskTitle_label = document.createElement('label');
    TaskTitle_label.for = `Task_title`;
    TaskTitle_label.innerText = `Task Title`;
    TaskTitle_label.classList.add('head');
    const TaskTitle_input = document.createElement('input');
    TaskTitle_input.type = `text`;
    TaskTitle_input.id = `Task_title`;
    TaskTitle_input.name = `Task_title`;
    TaskTitle_input.autocomplete = `off`;
    TaskTitle_input.placeholder = `e.g. Debugging`;

    TaskTitle.appendChild(TaskTitle_label);
    TaskTitle.appendChild(TaskTitle_input);

    const TaskPriority = document.createElement('div');
    const TaskPriority_label = document.createElement('label');
    TaskPriority_label.for = `taskPriority`;
    TaskPriority_label.innerText = `Priority`;
    const TaskSelect = document.createElement('select');
    TaskSelect.id = `taskPriority`;
    TaskSelect.name = `taskPriority`;
    const option1 = document.createElement('option');
    option1.value = ``;
    option1.disabled = `true`;
    option1.selected = `true`;
    option1.innerText = `Select Priority`;
    const option2 = document.createElement('option');
    option2.value = `Low`;
    option2.innerText = `Low`;
    const option3 = document.createElement('option');
    option3.value = `Medium`;
    option3.innerText = `Medium`;
    const option4 = document.createElement('option');
    option4.value = `High`;
    option4.innerText = `High`;

    TaskSelect.appendChild(option1);
    TaskSelect.appendChild(option2);
    TaskSelect.appendChild(option3);
    TaskSelect.appendChild(option4);
    TaskPriority.appendChild(TaskPriority_label);
    TaskPriority.appendChild(TaskSelect);

    const Time = document.createElement('div');
    const dateLabel = document.createElement('label');
    dateLabel.for = `taskTime`;
    dateLabel.innerText = `Due on:`;
    const dateInput = document.createElement('input');
    dateInput.type = `date`;
    dateInput.id = `taskTime`;
    dateInput.name = `taskTime`;
    Time.appendChild(dateLabel);
    Time.appendChild(dateInput);

    const TaskHeader = document.createElement('h1');
    TaskHeader.innerText = `Add a Task`;
    const closeTaskForm = document.createElement('span');
    const closeTaskBtn = document.createElement('button');
    closeTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    closeTaskBtn.addEventListener('click', () =>
    {
        AddTask.classList.toggle('hidden');
        bed_of_form.classList.toggle('hidden');
    })
    closeTaskForm.appendChild(closeTaskBtn);
    TaskHeader.appendChild(closeTaskForm);
    TaskHeader.classList.add('form-header');

    const TaskSubmit = document.createElement('div');
    const TaskSubmitBtn = document.createElement('button');
    TaskSubmitBtn.type = `submit`;
    TaskSubmitBtn.innerText = `Submit`;
    TaskSubmit.appendChild(TaskSubmitBtn);
    TaskSubmitBtn.addEventListener('click', () =>
    {
        let isTasktoEdit = localStorage.getItem('isEditTask');
        if (isTasktoEdit == "yes")
        {

            let title = document.getElementById('Task_title').value;
            let priority = document.getElementById('taskPriority').value;
            let time = document.getElementById('taskTime').value;

            let listOfProjectsByNames = [];
            let project_index;

            for (let project of Projects.projectsList)
            {
                listOfProjectsByNames.push(project.title);
            }
            if (listOfProjectsByNames.includes(mainHeader.innerText))
            {
                project_index = listOfProjectsByNames.indexOf(`${ mainHeader.innerText }`);
            }
            else
            {
                project_index = 0;
            }

            let taskIndex = editArray.indexOf(button);
            Handler.editTask(project_index, taskIndex, title, priority, time);

            localStorage.removeItem("isEditTask");
            localStorage.setItem('isEditTask', 'no');
            document.getElementById('TaskForm').reset();

        }
        else
        {

            let title = document.getElementById('Task_title').value;
            let priority = document.getElementById('taskPriority').value;
            let time = document.getElementById('taskTime').value;

            let listOfProjectsByNames = [];
            let index;

            for (let project of Projects.projectsList)
            {
                listOfProjectsByNames.push(project.title);
            }
            if (listOfProjectsByNames.includes(mainHeader.innerText))
            {
                index = listOfProjectsByNames.indexOf(`${ mainHeader.innerText }`);
            }
            else
            {
                index = 0;
            }

            Tasks.createTask(index, title, priority, time);
            document.getElementById('TaskForm').reset();
        }
    })

    AddTask.appendChild(TaskHeader);
    AddTask.appendChild(TaskTitle);
    AddTask.appendChild(TaskPriority);
    AddTask.appendChild(Time);
    AddTask.appendChild(TaskSubmit);
    AddTask.classList.toggle('hidden');


    const bed_of_form = document.createElement('div');
    bed_of_form.classList.add('bed-of-forms');
    bed_of_form.classList.toggle('hidden');
    // -------------------------------------------===================----------------------------

    const inboxProjectList = document.createElement('table');
    const inboxHeader = document.createElement('thead');
    inboxHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    inboxProjectList.appendChild(inboxHeader);

    const todayList = document.createElement('table');
    const todayHeader = document.createElement('thead');
    todayHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    todayList.appendChild(todayHeader);

    const weekList = document.createElement('table');
    const weekHeader = document.createElement('thead');
    weekHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    weekList.appendChild(weekHeader);

    const completedList = document.createElement('table');
    const completedHeader = document.createElement('thead');
    completedHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    completedList.appendChild(completedHeader);

    const importantList = document.createElement('table');
    const importantHeader = document.createElement('thead');
    importantHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    importantList.appendChild(importantHeader);

    const project_s_task_list = document.createElement('table');
    const Project_s_task_header = document.createElement('thead');
    Project_s_task_header.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td><td>Edit</td><td>Delete</td>`;
    project_s_task_list.appendChild(Project_s_task_header);

    const root = document.createElement('div');
    root.classList.add('todoRoot');
    // SideBar
    // ----------------------------------------------------------------------
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    const upperSide = document.createElement('div');
    const lowerSide = document.createElement('div');
    sideBar.appendChild(upperSide);
    sideBar.appendChild(lowerSide);
    // upperSide
    const upperBody = document.createElement('div');
    upperBody.classList.add('upperSideBar')
    // Inbox ..............................................................
    const inbox = document.createElement('button');
    inbox.classList.add('button');
    inbox.innerText = `Inbox`;
    inbox.addEventListener('click', () =>
    {
        mainHeader.innerText = `Inbox`;
        mainPage.lastChild.replaceWith(inboxProjectList);


        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = inboxProjectList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                inboxProjectList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }
        for (let box of list)
        {
            let list = document.createElement('tr');
            list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
            inboxProjectList.appendChild(list);
        }

        mainPage.lastChild.replaceWith(inboxProjectList);
    });
    // Today .............................................................
    const today = document.createElement('button');
    today.classList.add('button');
    today.innerText = `Today`;
    today.addEventListener('click', () =>
    {
        mainHeader.innerText = `Today`;
        mainPage.lastChild.replaceWith(todayList);
        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = todayList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                todayList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }

        for (let box of list)
        {
            if (box.time <= 24)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
            }
        }
    });
    // within a week 
    const next7day = document.createElement('button');
    next7day.classList.add('button');
    next7day.innerText = `Next 7 days`;
    next7day.addEventListener('click', () =>
    {
        mainHeader.innerText = `Next 7 days`;
        mainPage.lastChild.replaceWith(weekList);
        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = weekList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                weekList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }

        for (let box of list)
        {
            if (box.time <= 168)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
                weekList.appendChild(list);
            }
        }
    });

    const important = document.createElement('button');
    important.classList.add('button');
    important.innerText = `Important`;
    important.addEventListener('click', () =>
    {
        mainHeader.innerText = `Important`;
        mainPage.lastChild.replaceWith(importantList);
        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = importantList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                importantList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }

        for (let box of list)
        {
            if (box.priority == 'high' || box.priority == 'High')
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
                importantList.appendChild(list);
            }
        }
        let deleteBtn = document.getElementsByClassName("delete-button");
        let editBtn = document.getElementsByClassName("edit-button");

        let editArray = [ ...editBtn ];
        let deleteArray = [ ...deleteBtn ];

        //Edit CRUD Operation
        for (let button of editArray)
        {
            button.addEventListener('click', () =>
            {
                localStorage.setItem('isEditTask', 'yes');

                AddTask.classList.toggle('hidden');
                bed_of_form.classList.toggle('hidden');

            })
        }

        //Delete CRUD Operation
        for (let button of deleteArray)
        {
            button.addEventListener('click', () =>
            {
                console.log("Deleted!");
            })
        }

    });

    const completed = document.createElement('button');
    completed.classList.add('button');
    completed.innerText = `Completed`;
    completed.addEventListener('click', () =>
    {
        mainHeader.innerText = `Completed`;
        mainPage.lastChild.replaceWith(completedList);
        let list = Tasks.listofTask();
        // Avoid Duplication
        try
        {
            let tableRows = completedList.rows.length;
            let i = 1;
            while (tableRows > i)
            {
                completedList.deleteRow(i);
            }

        } catch (error)
        {
            console.error("Enough Deletion!");
        }

        for (let box of list)
        {
            if (box.done == true)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
                completedList.appendChild(list);
            }
        }
    });

    upperBody.appendChild(inbox);
    upperBody.appendChild(today);
    upperBody.appendChild(next7day);
    upperBody.appendChild(important);
    upperBody.appendChild(completed);
    upperSide.appendChild(upperBody);


    // lowerSide
    const header = document.createElement('div');
    const head = document.createElement('h1');
    head.innerText = `Projects`;
    const hButton = document.createElement('button');
    hButton.innerText = `Add Project`;
    header.appendChild(head);
    header.appendChild(hButton);

    header.classList.add('flex');
    hButton.addEventListener('click', () =>
    {
        AddProject.classList.toggle('hidden');
        bed_of_form.classList.toggle('hidden');
    })
    const projects = document.createElement('div');
    projects.classList.add('list');
    for (let project of Projects.projectsList)
    {
        let proj = document.createElement('button');
        proj.innerHTML = `<i class="fa-solid icon ${ project.icon }"></i>  ${ project.title } `
        proj.style.color = `${ project.color }`;
        proj.classList.add('projectBtn');

        //When the project is clicked
        proj.addEventListener('click', () =>
        {
            mainHeader.innerText = `${ project.title }`;
            mainPage.lastChild.replaceWith(project_s_task_list);
            let tasks_of_project = [];

            for (let i = 0; i < Projects.projectsList.length; i++)
            {
                if (Projects.projectsList[ i ].title == mainHeader.innerText)
                {
                    for (let task of Projects.projectsList[ i ].tasks)
                    {
                        tasks_of_project.push(task);
                    }

                }
            }

            try
            {
                let tableRows = project_s_task_list.rows.length;
                let i = 1;
                while (tableRows > i)
                {
                    project_s_task_list.deleteRow(i);
                }
            } catch (error)
            {
                console.error("Enough Deletion");
            }

            for (let box of tasks_of_project)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="edit-button"><i class="fa-solid fa-pen-to-square" style="color:yellow;"></i></button></td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button> </td>`;
                project_s_task_list.appendChild(list);
            }
        })

        projects.appendChild(proj);
    }

    lowerSide.appendChild(header);
    lowerSide.appendChild(projects);
    lowerSide.style.height = `50%`

    // MainPage
    // ------------------------------------------------------------------------
    const mainPage = document.createElement('div');
    mainPage.classList.add('mainpage');
    const mainHeader = document.createElement('h1');

    mainHeader.innerText = `Inbox`;

    const newtask = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i> <p>Add Task</p>`;
    addTaskBtn.addEventListener('click', () =>
    {
        AddTask.classList.toggle('hidden');
        bed_of_form.classList.toggle('hidden');
    })
    newtask.classList.add('addTask');
    newtask.appendChild(addTaskBtn);


    mainPage.appendChild(mainHeader);
    mainPage.appendChild(newtask);
    mainPage.appendChild(inboxProjectList);


    root.appendChild(sideBar);
    root.appendChild(mainPage);
    root.appendChild(AddProject);
    root.appendChild(AddTask);
    root.appendChild(bed_of_form);
    document.body.appendChild(root);

})();


export default UI;