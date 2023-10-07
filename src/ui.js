import './style.css';
import Projects from './projects';
import Tasks from './tasks';

// fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const UI = (() =>
{
    // Important forms ------------------------------------------------------
    //   Add New Project +++++++++++++++++++++++++++++++++++++++++++++++++++++
    const AddProject = document.createElement('form');
    AddProject.classList.add('form');
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
    ProjectTitle_input.placeholder = `e.g. Debuging`;

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
            if (radio.checked)
            {
                radio.nextSibling.classList.toggle('radio-focus');
            };
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
    closeBtn.addEventListener('click', (e) =>
    {
        e.preventDefault();
        AddProject.classList.toggle('hidden');
    })
    closespan.appendChild(closeBtn);
    ProjectHeader.appendChild(closespan);
    ProjectHeader.classList.add('form-header');

    const ProjectSubmit = document.createElement('div');
    const submitBtn = document.createElement('input');
    submitBtn.type = `submit`;
    ProjectSubmit.appendChild(submitBtn);
    submitBtn.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        let form = document.getElementById('ProjectForm');
        alert("form data:", form);
    })

    AddProject.appendChild(ProjectHeader);
    AddProject.appendChild(ProjectTitle);
    AddProject.appendChild(ProjectIcon);
    AddProject.appendChild(ProjectColor);
    AddProject.appendChild(ProjectSubmit);
    AddProject.classList.toggle('hidden');

    // -------------------------------------------===================----------------------------

    const inboxProjectList = document.createElement('table');
    const inboxHeader = document.createElement('thead');
    inboxHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td>`;
    inboxProjectList.appendChild(inboxHeader);

    const todayList = document.createElement('table');
    const todayHeader = document.createElement('thead');
    todayHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td>`;
    todayList.appendChild(todayHeader);

    const weekList = document.createElement('table');
    const weekHeader = document.createElement('thead');
    weekHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td>`;
    weekList.appendChild(weekHeader);

    const completedList = document.createElement('table');
    const completedHeader = document.createElement('thead');
    completedHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td>`;
    completedList.appendChild(completedHeader);

    const importantList = document.createElement('table');
    const importantHeader = document.createElement('thead');
    importantHeader.innerHTML = `<td>Title</td> <td> Priority</td> <td>Time</td><td>Done</td>`;
    importantList.appendChild(importantHeader);

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
            list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
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
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                todayList.appendChild(list);
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
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
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
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                importantList.appendChild(list);
            }
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
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
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
    })
    const projects = document.createElement('div');
    projects.classList.add('list');
    for (let project of Projects.projectsList)
    {
        let proj = document.createElement('button');
        proj.innerHTML = `<i class="fa-solid icon ${ project.icon }"></i>  ${ project.title } `
        proj.style.color = `${ project.color }`;
        proj.classList.add('projectBtn');
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



    mainPage.appendChild(mainHeader);
    mainPage.appendChild(inboxProjectList);


    root.appendChild(sideBar);
    root.appendChild(mainPage);
    root.appendChild(AddProject);
    document.body.appendChild(root);

})();


export default UI;