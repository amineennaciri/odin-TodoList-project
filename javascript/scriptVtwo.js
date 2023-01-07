// pointing the html button
let btnAddProject = document.querySelector('.btnAddProject');
// creating the event listener
btnAddProject.addEventListener('click',initProject);
// pointing the left div 
const leftDiv = document.querySelector('.left-side');
// pointing the right div
const mainDiv = document.querySelector('.main-content');

// this function create the project input
function initProject(){
    // create input element and link it to the left div
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('class','project-input');
    leftDiv.appendChild(projectInput);
    // remove the initial button in html file
    btnAddProject.remove();
    // create the confirm button and link it to the left div
    const btnConfProject = document.createElement('button');
    btnConfProject.innerText = 'Confirm';
    btnConfProject.setAttribute('class','confProjectBtn');
    leftDiv.appendChild(btnConfProject);
    // create the cancel button and link it to the left div
    const btnCancelProject = document.createElement('button');
    btnCancelProject.innerText = 'Cancel';
    btnCancelProject.setAttribute('class','cancelProjectBtn');
    leftDiv.appendChild(btnCancelProject);
    // create event listeners
    btnConfProject.addEventListener('click',confirmProject);
    btnCancelProject.addEventListener('click',cancelProject);
}


// the add button event listener function
function confirmProject(e){
    // this condition enable us to stop adding the same project 
    // to the DOM multiple times
    if(!document.querySelector('.project-title')){
        console.log(document.querySelector('.project-input').value)
        //console.log(e.composedPath()[1].firstChild.innerHTML)
        //console.log(e.composedPath())
        const projectTitle = document.createElement('h2');
        projectTitle.setAttribute('class','project-title');
        // we assign the value that we wrote in the input
        // into the h2 title
        projectTitle.innerText = document.querySelector('.project-input').value
        //console.log(projectInput.value)
        // link the h2 to the right side div
        mainDiv.appendChild(projectTitle);
        // create the add button again bt now for the task
        let btnAddTask = document.createElement('button')
        btnAddTask.setAttribute('class','btnAddTask');
        btnAddTask.innerText = "Add Task";
        // link the add button for tasks to the right side div
        mainDiv.appendChild(btnAddTask);
        // add an event listener to the add button for tasks
        btnAddTask.addEventListener('click',initTask);
    }
}

// this is the event listener function enabled once we click
// on the cancel button in the project side.
function cancelProject(){
    // deleting the project input
    document.querySelector('.project-input').remove();
    // deleting the conf button
    document.querySelector('.confProjectBtn').remove();
    // deleting the cancel button
    document.querySelector('.cancelProjectBtn').remove();
    // if the h2 project was already created we can already
    // remove it
    if(document.querySelector('.project-title')){
        document.querySelector('.project-title').remove();
    }
    if(document.querySelector('.btnAddTask')){
        document.querySelector('.btnAddTask').remove();
    }
    // return the DOM to the initial condition
    // creating the add project again with the event listener
    btnAddProject = document.createElement('button')
    btnAddProject.setAttribute('class','btnAddProject');
    btnAddProject.innerText = "Add Project";
    // linking the button to the left div again
    leftDiv.appendChild(btnAddProject);
    // adding the event listener to the add project button
    btnAddProject.addEventListener('click',initProject);
}

// this is the run task function enabled after clicking on add task
function initTask(){
    // creating the input field
    const taskInput = document.createElement('input');        
    taskInput.setAttribute('type','text');
    taskInput.setAttribute('class','task-input');
    // link the input field to the right side div
    mainDiv.appendChild(taskInput);
    // remove the add task button
    document.querySelector('.btnAddTask').remove();
    // create an confirm task button
    const btnConfTask = document.createElement('button');
    btnConfTask.innerText = 'Confirm';
    btnConfTask.setAttribute('class','confTaskBtn');
    // link to the input  field to the right side
    mainDiv.appendChild(btnConfTask);
    // create a cancel btn
    const btnCancelTask = document.createElement('button');
    btnCancelTask.innerText = 'Cancel';
    btnCancelTask.setAttribute('class','cancelTaskBtn');
    mainDiv.appendChild(btnCancelTask);
    // event listeners for both confirm and cancel task buttons
    btnConfTask.addEventListener('click',confirmTask);
    btnCancelTask.addEventListener('click',cancelTask);
}
//
function cancelTask(){
    // remove task input
    document.querySelector('.task-input').remove();
    // remove confirm task btn
    document.querySelector('.confTaskBtn').remove();
    // remove cancel task btn
    document.querySelector('.cancelTaskBtn').remove();
    // remove if h2 was already assigned
    if(document.querySelector('.task-title')){
        document.querySelector('.task-title').remove();
    }
    btnAddTask = document.createElement('button')
    btnAddTask.setAttribute('class','btnAddTask');
    btnAddTask.innerText = "Add Task";
    mainDiv.appendChild(btnAddTask);
    btnAddTask.addEventListener('click',initTask);
}

function confirmTask(e){
    if(!document.querySelector('.task-title')){
        console.log(document.querySelector('.task-input').value)
        //console.log(e.composedPath()[1].firstChild.innerHTML)
        //console.log(e.composedPath())
        const taskTitle = document.createElement('h2');
        taskTitle.setAttribute('class','task-title');
        taskTitle.innerText = document.querySelector('.task-input').value;
        //console.log(projectInput.value)
        mainDiv.appendChild(taskTitle);
        let btnAddTask = document.createElement('button')
        btnAddTask.setAttribute('class','btnProject');
        btnAddTask.innerText = "Add Task";
        mainDiv.appendChild(btnAddTask);
        btnAddTask.addEventListener('click',initTask);
    }
}