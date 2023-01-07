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
    taskTitle: undefined,
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
        }
    },
    cancelProject : function(){
        // deleting the project input, conf button, cancel button
        // if the h2 project was already created we can already remove it
        // if the btn Add Task was already created we can already remove it
        new DeleteElmt('.project-input','.confProjectBtn','.cancelProjectBtn','.project-title','.btnAddTask')
        // return the DOM to the initial condition
        // creating the add project again with the event listener
        todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt()
        new AddEvent(todoList.btnAddProject,todoList.initProject).addEvent();
    },
    initTask : function(){
        console.log('Its morphin time')
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
        if(!document.querySelector('.task-title')){
        // create a task title
        new CreateElmt(todoList.taskTitle,'h2','task-title',todoList.mainDiv,document.querySelector('.task-input').value).createElmt();
        // create an Add task for the following task
        todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.mainDiv,'Add Task').createElmt();
        // create event listeners for add task button
        new AddEvent(todoList.btnAddTask,todoList.initTask).addEvent();
        }
    },
    cancelTask : function(){
        // remove task input, confirm task btn, cancel task btn, h2 task
        new DeleteElmt('.task-input','.confTaskBtn','.cancelTaskBtn','.task-title');
        // return the DOM to the initial condition
        // creating the add task again with the event listener
        todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.mainDiv,'Add Task').createElmt()
        new AddEvent(todoList.btnAddTask,todoList.initTask).addEvent();
    },
}
// properties that call the constructor to create event listeners
todoList.btnAddProjectEvent = new AddEvent(todoList.btnAddProject,todoList.initProject).addEvent()