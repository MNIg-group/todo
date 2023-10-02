import './style.css';
import Projects from './projects';
// fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const UI = (() =>
{

    const projectLists = document.createElement('ul');
    const inboxProjectList = document.createElement('ul');
    const todayList = document.createElement('ul');

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
    localStorage.setItem('inbox', JSON.stringify(inboxProjectList));
    inbox.addEventListener('click', () =>
    {
        mainHeader.innerText = `Inbox`;
        mainPage.lastChild.replaceWith(inboxProjectList);

        for (let i = 0; i < Projects.projectsList.length; i++)
        {
            let taskList = Projects.projectsList[ i ].tasks;
            for (let task of taskList)
            {
                let list = document.createElement('li');
                list.innerHTML = `${ task.title } ${ task.priority } ${ task.time } ${ task.done }`;
                inboxProjectList.appendChild(list);
            }
        }
    });
    // Today .............................................................
    const today = document.createElement('li');
    today.classList.add('button');
    today.innerText = `Today`;
    today.addEventListener('click', () =>
    {
        mainHeader.innerText = `Today`;
        mainPage.lastChild.replaceWith(todayList);
        let taskList = Projects.projectsList[ 1 ].tasks;
        for (let task of taskList)
        {
            if (`${ task.time <= 24 }`)
            {
                let list = document.createElement('li');
                list.innerHTML = `${ task.title } ${ task.priority } ${ task.time } ${ task.done }`;
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