
import Tasks from "./tasks";
import Projects from "./projects";
import UI from "./ui";

Projects.createProject('Debugging', 'fa-flight', 'project-purple');


console.log("List of Tasks: ");
Tasks.createTask(0, 'wow', 'high', '12hr', false); // will go to default project
Tasks.createTask(1, 'server', 'medium', '22hr', true);

Tasks.editTask(1, 0, 'Okay', 'low', '3hr', false)

Projects.editProject(1, 'Cleaning', 'fa-ball', 'project-yellow');
