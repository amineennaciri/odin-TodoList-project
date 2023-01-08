// constructor that make event listeners
function AddEvent(btnTargeted,eventFunction){
    this.btnTargeted = btnTargeted
    this.eventFunction = eventFunction
    this.addEvent = function(){
        btnTargeted.addEventListener('click',eventFunction);
    }
}
// constructor that create elements using DOM
function CreateElmt(varName,elmtName,className,parentElmt,elmtText){
    this.varName = varName
    this.elmtName = elmtName
    this.className = className
    this.parentElmt = parentElmt
    this.elmtText = elmtText
    this.createElmt = function(){
        this.varName = document.createElement(this.elmtName);
        if(this.elmtName ==='input'){
            this.varName.setAttribute('type','text');
        }
        this.varName.setAttribute('class',this.className);
        this.varName.innerText = this.elmtText;
        this.parentElmt.appendChild(this.varName);
        return this.varName
    }
}
// constructor that remove elements for cancel event listeners
function DeleteElmt(classOne,classTwo,classThree,classFour,classFive){
    this.classOne = classOne
    this.classTwo = classTwo
    this.classThree = classThree
    this.classFour = classFour
    this.classFive = classFive
    let classArray = [this.classOne,this.classTwo,this.classThree,this.classFour,this.classFive]
    for(let i = 0;i<=classArray.length-1;i++){
        if(document.querySelector(classArray[i])){
            document.querySelector(classArray[i]).remove()
        }
    }
}
// create todoList object
let todoList = {
    // properties
    // pointing the html button
    btnAddProject : document.querySelector('.btnAddProject'),
    // pointing the left div 
    leftDiv : document.querySelector('.left-side'),
    // pointing the right div
    mainDiv : document.querySelector('.main-content'),
    // declaring variables for DOM element creation
    projectInput : undefined,
    btnConfProject : undefined,
    btnCancelProject : undefined,
    projectTitle : undefined,
    btnAddTask : undefined,
    taskInput : undefined,
    btnConfTask : undefined,
    btnCancelTask : undefined,
    taskComplete: undefined,
    projectDisplay: undefined,
    projectDelete: undefined,
    taskDelete : undefined,
    taskDisplay : undefined,
    taskDate : undefined,
    taskCount: 0,
    btntoDeleteId: undefined,
    // methods
    // this function create the project input
    initProject : function(){
        // create input element and link it to the left div
        new CreateElmt(todoList.projectInput,'input','project-input',todoList.leftDiv,'').createElmt()
        // remove the initial button in html file
        new DeleteElmt('.btnAddProject');
        // create the confirm button and link it to the left div
        todoList.btnConfProject = new CreateElmt(todoList.btnConfProject,'button','confProjectBtn',todoList.leftDiv,'Confirm').createElmt()
        // create the cancel button and link it to the left div
        todoList.btnCancelProject = new CreateElmt(todoList.btnCancelProject,'button','cancelProjectBtn',todoList.leftDiv,'Cancel').createElmt()
        // create event listeners for confirm and cancel buttons
        new AddEvent(todoList.btnConfProject,todoList.confirmProject).addEvent();
        new AddEvent(todoList.btnCancelProject,todoList.cancelProject).addEvent();
    },
    // the add button event listener function
    confirmProject : function(){
        // this condition enable us to stop adding the same project 
        // to the DOM multiple times
        if(!document.querySelector('.project-title')){
            // create the projectTitle Header and link it to the main div
            todoList.projectTitle = new CreateElmt(todoList.projectTitle,'h2','project-title',todoList.mainDiv,document.querySelector('.project-input').value).createElmt();
            // create the add button for the task
            todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.mainDiv,'Add Task').createElmt();
            // create event listeners for add task button
            new AddEvent(todoList.btnAddTask,todoList.initTask).addEvent();
            // create the button that will display the name of the project
            todoList.projectDisplay = new CreateElmt(todoList.projectDisplay,'button','project-display',todoList.leftDiv,document.querySelector('.project-input').value).createElmt();
            // create the delete button that will delete the current project if pressed
            todoList.projectDelete = new CreateElmt(todoList.projectDelete,'button','project-delete',todoList.leftDiv,'delete').createElmt();
            // deleting the project input, conf button, cancel button
            new DeleteElmt('.project-input','.confProjectBtn','.cancelProjectBtn')
            // create event listeners for delete project button
            new AddEvent(todoList.projectDelete,todoList.deleteProject).addEvent();
        }
    },
    cancelProject : function(){
        // deleting the project input, conf button, cancel button
        new DeleteElmt('.project-input','.confProjectBtn','.cancelProjectBtn')
        // return the DOM to the initial condition
        // creating the add project again with the event listener
        todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt()
        new AddEvent(todoList.btnAddProject,todoList.initProject).addEvent();
    },
    deleteProject : function(){
        // deleting h2 project, the btn Add Task, delete button and projectDsplay
        new DeleteElmt('.project-title','.btnAddTask','.project-delete','.project-display')
        // return the DOM to the initial condition
        // creating the add project again with the event listener
        todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt()
        new AddEvent(todoList.btnAddProject,todoList.initProject).addEvent();
    },
    initTask : function(){
        // creating the input field
        new CreateElmt(todoList.taskInput,'input','task-input',todoList.mainDiv,'').createElmt()
        // remove the add task button
        new DeleteElmt('.btnAddTask');
        // create an confirm task button
        todoList.btnConfTask = new CreateElmt(todoList.btnConfTask,'button','confTaskBtn',todoList.mainDiv,'Confirm').createElmt();
        // create a cancel btn
        todoList.btnCancelTask = new CreateElmt(todoList.btnCancelTask,'button','cancelTaskBtn',todoList.mainDiv,'Cancel').createElmt();
        // event listeners for both confirm and cancel task buttons
        new AddEvent(todoList.btnConfTask,todoList.confirmTask).addEvent();
        new AddEvent(todoList.btnCancelTask,todoList.cancelTask).addEvent();
    },
    confirmTask : function(){
        // this condition enable us to stop adding the same task 
        // to the DOM multiple times
        //if(!document.querySelector('.task-title')){
            // create a task complete button
            todoList.taskComplete = new CreateElmt(todoList.taskComplete,'button','task-complete',todoList.mainDiv,'O').createElmt();
            // add an Id attribute to the task complete button
            todoList.taskComplete.setAttribute('id',todoList.taskCount);
            // create the button that will display the name of the task
            todoList.taskDisplay = new CreateElmt(todoList.taskDisplay,'button','task-display',todoList.mainDiv,document.querySelector('.task-input').value).createElmt();
            // add an Id attribute to the display task button
            todoList.taskDisplay.setAttribute('id',todoList.taskCount);

            // create the delete button that will delete the current task if pressed
            todoList.taskDate = new CreateElmt(todoList.taskDate,'button','task-date',todoList.mainDiv,'date').createElmt();
            // add an Id attribute to the delete task button
            todoList.taskDate.setAttribute('id',todoList.taskCount);

            // create the delete button that will delete the current task if pressed
            todoList.taskDelete = new CreateElmt(todoList.taskDelete,'button','task-delete',todoList.mainDiv,'delete').createElmt();
            // add an Id attribute to the delete task button
            todoList.taskDelete.setAttribute('id',todoList.taskCount);
            // deleting the ptask input, conf button, cancel button
            new DeleteElmt('.task-input','.confTaskBtn','.cancelTaskBtn')
            // create event listeners for complete task button
            new AddEvent(todoList.taskComplete,todoList.deleteTask).addEvent();
            // create event listeners for delete task button
            new AddEvent(todoList.taskDelete,todoList.deleteTask).addEvent();
            // create an Add task for the following task
            todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.mainDiv,'Add Task').createElmt();
            // create event listeners for add task button
            new AddEvent(todoList.btnAddTask,todoList.initTask).addEvent();
            // increment the taskCount
            todoList.taskCount++;
        //}
    },
    cancelTask : function(){
        // remove task input, confirm task btn, cancel task btn, h2 task
        new DeleteElmt('.task-input','.confTaskBtn','.cancelTaskBtn');
        // return the DOM to the initial condition
        // creating the add task again with the event listener
        todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.mainDiv,'Add Task').createElmt()
        new AddEvent(todoList.btnAddTask,todoList.initTask).addEvent();
    },
    deleteTask : function(e){
        console.log(e);
        console.log(e.srcElement.id); // value of the id attribute of the button
        btntoDeleteId = e.srcElement.id;
        while(document.getElementById(btntoDeleteId)){
            document.getElementById(btntoDeleteId).remove();
        }
    },
}
// properties that call the constructor to create event listeners
todoList.btnAddProjectEvent = new AddEvent(todoList.btnAddProject,todoList.initProject).addEvent()