// pointing the html button
let btnProject = document.querySelector('.btnProject');
// creating the event listener
btnProject.addEventListener('click',runInput);
// pointing the left div 
const leftDiv = document.querySelector('.left-side');
// pointing the right div
const mainDiv = document.querySelector('.main-content');

// this function create the project input
function runInput(){
    // create input element and link it to the left div
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('class','project-input');
    leftDiv.appendChild(projectInput);
    // remove the initial button in html file
    btnProject.remove();
    // create the add button and link it to the left div
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add';
    addBtn.setAttribute('class','add-btn');
    leftDiv.appendChild(addBtn);
    // create the cancel button and link it to the left div
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.setAttribute('class','cancel-btn');
    leftDiv.appendChild(cancelBtn);
    // create event listeners
    addBtn.addEventListener('click',saveProject);
    cancelBtn.addEventListener('click',deleteProject);
}

// the add button event listener function
function saveProject(e){
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
        let btnTask = document.createElement('button')
        btnTask.setAttribute('class','btnTask');
        btnTask.innerText = "Add Task";
        // link the add button for tasks to the right side div
        mainDiv.appendChild(btnTask);
        // add an event listener to the add button for tasks
        btnTask.addEventListener('click',runTask);
    }
}
// this is the event listener function enabled once we click
// on the cancel button in the project side.
function deleteProject(){
    // deleting the project input
    document.querySelector('.project-input').remove();
    // deleting the add button
    document.querySelector('.add-btn').remove();
    // deleting the cancel button
    document.querySelector('.cancel-btn').remove();
    // if the h2 project was already created we can already
    // remove it
    if(document.querySelector('.project-title')){
        document.querySelector('.project-title').remove();
    }
    // return the DOM to the initial condition
    // creating the add project again with the event listener
    btnProject = document.createElement('button')
    btnProject.setAttribute('class','btnProject');
    btnProject.innerText = "Add Project";
    // linking the button to the left div again
    leftDiv.appendChild(btnProject);
    // adding the event listener to the add project button
    btnProject.addEventListener('click',runInput);
}
// this is the run task function enabled after clicking on add task
function runTask(){
    // creating the input field
    const taskInput = document.createElement('input');        
    taskInput.setAttribute('type','text');
    taskInput.setAttribute('class','task-input');
    // link the input field to the right side div
    mainDiv.appendChild(taskInput);
    // remove the add task button
    document.querySelector('.btnTask').remove();
    // create an confirm task button
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add';
    addBtn.setAttribute('class','addTask-btn');
    // link to the input  field to the right side
    mainDiv.appendChild(addBtn);
    // create a cancel btn
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.setAttribute('class','cancelTask-btn');
    mainDiv.appendChild(cancelBtn);
    // event listeners for both confirm and cancel task buttons
    addBtn.addEventListener('click',saveTask);
    cancelBtn.addEventListener('click',deleteTask);
}
//
function deleteTask(){
    // remove task input
    document.querySelector('.task-input').remove();
    // remove confirm task btn
    document.querySelector('.addTask-btn').remove();
    // remove cancel task btn
    document.querySelector('.cancelTask-btn').remove();
    // remove if h2 was already assigned
    if(document.querySelector('.task-title')){
        document.querySelector('.task-title').remove();
    }
    btnTask = document.createElement('button')
    btnTask.setAttribute('class','btnTask');
    btnTask.innerText = "Add Task";
    mainDiv.appendChild(btnTask);
    btnTask.addEventListener('click',runTask);
}

function saveTask(e){
    if(!document.querySelector('.task-title')){
        console.log(document.querySelector('.task-input').value)
        //console.log(e.composedPath()[1].firstChild.innerHTML)
        //console.log(e.composedPath())
        const taskTitle = document.createElement('h2');
        taskTitle.setAttribute('class','task-title');
        taskTitle.innerText = document.querySelector('.task-input').value;
        //console.log(projectInput.value)
        mainDiv.appendChild(taskTitle);
        let btnTask = document.createElement('button')
        btnTask.setAttribute('class','btnProject');
        btnTask.innerText = "Add Task";
        mainDiv.appendChild(btnTask);
        btnTask.addEventListener('click',runTask);
    }
}