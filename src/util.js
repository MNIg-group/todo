import Tasks from "./tasks";

let list = Tasks.listofTask();

export function deleteTable (table, type)
{

    if (type == "week")
    {


        console.log("type is week:", type == "week");
        for (let box of list)
        {
            if (box.time <= 168)
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
                table.appendChild(list);
            }
        }
        return
    } else if (type == "important")
    {


        console.log('type is important: ', type == "important");
        for (let box of list)
        {
            if (box.priority == 'high' || box.priority == 'High')
            {
                let list = document.createElement('tr');
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
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
                list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
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
            list.innerHTML = `<td>${ box.title }</td> <td>${ box.priority }</td> <td>${ box.time }</td> <td>${ box.done }</td><td><button class="delete-button"><i class="fa-solid fa-trash" style="color:purple;"></i></button></td>`;
            table.appendChild(list);
        }
        return
    }

}