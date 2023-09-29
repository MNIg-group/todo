
import Tasks from "./tasks";
import Projects from "./projects";


Projects.createProject('Debugging', 'fa-flight', 'project-purple');


console.log("List of Tasks: ");
Tasks.createTask(0, 'wow', 'high', '12hr', false); // will go to default project
Tasks.createTask(1, 'server', 'medium', '22hr', true);