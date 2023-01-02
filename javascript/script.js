let btnProject = document.querySelector('.btnProject');
btnProject.addEventListener('click',runInput);
const leftDiv = document.querySelector('.left-side');
const mainDiv = document.querySelector('.main-content');

function runInput(){
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('class','project-input');
    leftDiv.appendChild(projectInput);
    btnProject.remove();
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add';
    addBtn.setAttribute('class','add-btn');
    leftDiv.appendChild(addBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.setAttribute('class','cancel-btn');
    leftDiv.appendChild(cancelBtn);
    addBtn.addEventListener('click',saveProject);
    cancelBtn.addEventListener('click',deleteProject);
}

function saveProject(e){
    if(!document.querySelector('.project-title')){
        console.log(document.querySelector('.project-input').value)
        //console.log(e.composedPath()[1].firstChild.innerHTML)
        //console.log(e.composedPath())
        const projectTitle = document.createElement('h2');
        projectTitle.setAttribute('class','project-title');
        projectTitle.innerText = document.querySelector('.project-input').value
        //console.log(projectInput.value)
        mainDiv.appendChild(projectTitle);
        let btnTask = document.createElement('button')
        btnTask.setAttribute('class','btnTask');
        btnTask.innerText = "Add Task";
        mainDiv.appendChild(btnTask);
        btnTask.addEventListener('click',runTask);
    }
}

function deleteProject(){
    document.querySelector('.project-input').remove();
    document.querySelector('.add-btn').remove();
    document.querySelector('.cancel-btn').remove();
    if(document.querySelector('.project-title')){
        document.querySelector('.project-title').remove();
    }
    btnProject = document.createElement('button')
    btnProject.setAttribute('class','btnProject');
    btnProject.innerText = "Add Project";
    leftDiv.appendChild(btnProject);
    btnProject.addEventListener('click',runInput);
}

function runTask(){
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type','text');
    taskInput.setAttribute('class','task-input');
    mainDiv.appendChild(taskInput);
    document.querySelector('.btnTask').remove();
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add';
    addBtn.setAttribute('class','addTask-btn');
    mainDiv.appendChild(addBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.setAttribute('class','cancelTask-btn');
    mainDiv.appendChild(cancelBtn);
    addBtn.addEventListener('click',saveTask);
    cancelBtn.addEventListener('click',deleteTask);
}
//
function deleteTask(){
    document.querySelector('.task-input').remove();
    document.querySelector('.addTask-btn').remove();
    document.querySelector('.cancelTask-btn').remove();
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

