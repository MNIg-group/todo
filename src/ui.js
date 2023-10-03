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
    const upperBody = document.createElement('ul');
    // Inbox ..............................................................
    const inbox = document.createElement('li');
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
    const today = document.createElement('li');
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
            if (`${ box.time <= 24 }`)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                todayList.appendChild(list);
            }
        }
    });
    // within a week 
    const next7day = document.createElement('li');
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
            if (`${ box.time <= 168 }`)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td>`;
                weekList.appendChild(list);
            }
        }
    });

    const important = document.createElement('li');
    important.classList.add('button');
    important.innerText = `Important`;
    important.addEventListener('click', () =>
    {
        mainHeader.innerText = `Important`;
    });

    const completed = document.createElement('li');
    completed.classList.add('button');
    completed.innerText = `Completed`;
    completed.addEventListener('click', () =>
    {
        mainHeader.innerText = `Completed`;
    });

    upperBody.appendChild(inbox);
    upperBody.appendChild(today);
    upperBody.appendChild(next7day);
    upperBody.appendChild(important);
    upperBody.appendChild(completed);
    upperSide.appendChild(upperBody);


    // lowerSide
    const header = document.createElement('h1');
    header.innerText = `Projects`;
    const projects = document.createElement('div');
    projects.classList.add('list');
    for (let project of Projects.projectsList)
    {
        let proj = document.createElement('div');
        proj.innerHTML = `<i class="fa-solid ${ project.icon }"></i>  ${ project.title } `
        proj.style.color = `${ project.color }`;
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
    document.body.appendChild(root);

})();


export default UI;