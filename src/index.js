/* import _ from 'date-fns'; */
import { format, compareAsc } from 'date-fns';
/* let date_fns = require('date-fns'); */
console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'));
console.log(format(new Date(2014, 1, 11),  'PPPP'));
/* console.log(format('2023-01-24',  'PPPP')); */
/* const newDate = new Date();
console.log(newDate)
let varA = '2023-05-25'
let dateVar = format(new Date(varA), 'MM/dd/yyyy')
console.log(dateVar) */
// constructor that make event listeners
function AddEvent(btnTargeted,eventFunction,eventType){
    this.btnTargeted = btnTargeted
    this.eventFunction = eventFunction
    this.eventType = eventType
    this.addEvent = function(){
        btnTargeted.addEventListener(eventType,eventFunction);
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
    // pointing the sub main div
    //submainDiv :  document.querySelector('.submain-content'),
    submainDiv : undefined,
    submainDivParent : undefined,
    // declaring variables for DOM element creation
    projectInput : undefined,
    btnConfProject : undefined,
    btnCancelProject : undefined,
    projectTitle : undefined,
    taskmainTitle: undefined,
    btnAddTask : undefined,
    taskInput : undefined,
    btnConfTask : undefined,
    btnCancelTask : undefined,
    taskComplete: undefined,
    projectDisplay: undefined,
    projectDelete: undefined,
    projectCount : 0,
    mainContentChilds: undefined,
    taskDelete : undefined,
    taskDisplay : undefined,
    taskDate : undefined,
    taskCount: 0,
    btntoDeleteId: undefined,
    //
    taskDateNewEl : undefined,
    inputDateIndex : undefined,
    inputDateValue: undefined,
    inputDateArray: undefined,
    inputDatetoDeleteId : undefined,
    //
    // methods
    // this function create the project input
    initProject : function(){
        // create input element and link it to the left div
        new CreateElmt(todoList.projectInput,'input','project-input',todoList.leftDiv,'').createElmt()
        // remove the initial button in html file
        new DeleteElmt('.btnAddProject');
        // create the confirm button and link it to the left div
        todoList.btnConfProject = new CreateElmt(todoList.btnConfProject,'button','confProjectBtn',todoList.leftDiv,'Confirm').createElmt()
        // add an Id attribute to the confirm button
        todoList.btnConfProject.setAttribute('id',todoList.projectCount);
        // create the cancel button and link it to the left div
        todoList.btnCancelProject = new CreateElmt(todoList.btnCancelProject,'button','cancelProjectBtn',todoList.leftDiv,'Cancel').createElmt()
        // create event listeners for confirm and cancel buttons
        new AddEvent(todoList.btnConfProject,todoList.confirmProject,'click').addEvent();
        new AddEvent(todoList.btnCancelProject,todoList.cancelProject,'click').addEvent();
    },
    // the add button event listener function
    confirmProject : function(e){
        // this condition enable us to stop adding the same project 
        // to the DOM multiple times
        if(document.querySelector('.submain-content') && e.srcElement.id!=document.querySelector('.submain-content').id){
            console.log(e.srcElement.id);
            console.log('I ran the condition');  
            todoList.showCurrentProjectTasks(e);
        }
            // creating the sub-maincontent div
            todoList.submainDiv = new CreateElmt(todoList.submainDiv,'div','submain-content',todoList.mainDiv,'').createElmt();
            // add an Id attribute to the submain-content project
            todoList.submainDiv.setAttribute('id',todoList.projectCount);
            // THIS IS A BIG TEST *****************//
            let varB = document.querySelectorAll('.submain-content');
            /*         console.log(varB);
                    console.log(varA); */
                    for (let i=0;i<=varB.length-1;i++){
                        if(varB[i].id==todoList.projectCount){
                            todoList.submainDivParent = varB[i];      
                        }   
                    }

            // THIS IS A BIG TEST ******************//

            // create the projectTitle Header and link it to the main div
            todoList.projectTitle = new CreateElmt(todoList.projectTitle,'h2','project-title',todoList.submainDivParent,document.querySelector('.project-input').value).createElmt();
            // add an Id attribute to the project Title h2
            //todoList.projectTitle.setAttribute('id',todoList.projectCount);
            // create the add button for the task
            todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.submainDivParent,'Add Task').createElmt();
            // create event listeners for add task button
            new AddEvent(todoList.btnAddTask,todoList.initTask,'click').addEvent();
            // create the button that will display the name of the project
            todoList.projectDisplay = new CreateElmt(todoList.projectDisplay,'button','project-display',todoList.leftDiv,document.querySelector('.project-input').value).createElmt();
             // add an Id attribute to the project display
             todoList.projectDisplay.setAttribute('id',todoList.projectCount);
            //*********** */ this line below is a test
            new AddEvent(todoList.projectDisplay,todoList.displayAnotherProjectTasks,'click').addEvent();

            //********** */ the lines above are a test
            // create the delete button that will delete the current project if pressed
            todoList.projectDelete = new CreateElmt(todoList.projectDelete,'button','project-delete',todoList.leftDiv,'delete').createElmt();
            // add an Id attribute to the project delete button
            todoList.projectDelete.setAttribute('id',todoList.projectCount);
            // deleting the project input, conf button, cancel button
            new DeleteElmt('.project-input','.confProjectBtn','.cancelProjectBtn')
            // create event listeners for delete project button
            new AddEvent(todoList.projectDelete,todoList.deleteProject,'click').addEvent();
        //}
        // create a new add Project btn
        todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt();
        // add an event listener to the new add Project btn
        todoList.btnAddProjectEvent = new AddEvent(todoList.btnAddProject,todoList.initProject,'click').addEvent();
        // the following line puts a condition where if a project was already created the following command will be applied
        todoList.projectCount++;
    },
    showCurrentProjectTasks : function(e){
        console.log(e.srcElement.id)//ID
        let varB = document.querySelectorAll('.submain-content');
/*         console.log(varB);
        console.log(varA); */
        for (let i=0;i<=varB.length-1;i++){
            if(varB[i].id!=e.srcElement.id){
                varB[i].style.display = "none";      
            }   
        }
/*         if(varB[1].style.display != "none"){
            for (let i=1;i<=varB.length-1;i++){
                varB[i].style.display = "none";
            }
        } */
    },
    displayAnotherProjectTasks : function(e){
        /* console.log(e.srcElement.id); */
        /* document.querySelector().children; */
        console.log(e.srcElement.id)//ID
        let varB = document.querySelectorAll('.submain-content');
/*         console.log(varB);
        console.log(varA); */
        for (let i=0;i<=varB.length-1;i++){
            if(varB[i].id!=e.srcElement.id){
                varB[i].style.display = "none";      
            }else{
                //varB[i].style.display = "block"; 
                varB[i].style.removeProperty('display');
            }
        }
/*         let varA = document.querySelector('.main-content').children.length;
        let varB = document.querySelector('.main-content').children;
        console.log(varB);
        console.log(varA);
        if(varB[1].style.display != "none"){
            for (let i=1;i<=varA-1;i++){
                varB[i].style.display = "none";
            } 
        }else{
            for (let i=1;i<=varA-1;i++){
                varB[i].style.display = "block";
            }  
        } */
    },
    cancelProject : function(){
        // deleting the project input, conf button, cancel button
        new DeleteElmt('.project-input','.confProjectBtn','.cancelProjectBtn')
        // return the DOM to the initial condition
        // creating the add project again with the event listener
        todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt()
        new AddEvent(todoList.btnAddProject,todoList.initProject,'click').addEvent();
    },
    deleteProject : function(){
        // deleting h2 project, the btn Add Task, delete button and projectDsplay
        new DeleteElmt('.project-title','.btnAddTask','.project-delete','.project-display')
        // I need to be able to delete the everything inside the right div
        todoList.mainContentChilds = document.querySelector('.main-content').children;
        while(todoList.mainContentChilds.length>0){
            todoList.mainContentChilds[0].remove();
        }
        // return the DOM to the initial condition
        // creating the add project again with the event listener
/*         todoList.btnAddProject = new CreateElmt(todoList.btnAddProject,'button','btnAddProject',todoList.leftDiv,'Add Project').createElmt()
        new AddEvent(todoList.btnAddProject,todoList.initProject,'click').addEvent(); */
        // create the h2: Tasks List again because it was deleted.
        todoList.taskmainTitle = new CreateElmt(todoList.taskmainTitle,'h2','main-header',todoList.submainDiv,'Tasks List').createElmt();
    },
    initTask : function(e){
        console.log(e.srcElement.parentNode.id);
        // THIS IS A BIG TEST *****************//
        let varB = document.querySelectorAll('.submain-content');
        /*         console.log(varB);
                console.log(varA); */
                for (let i=0;i<=varB.length-1;i++){
                    if(varB[i].id==e.srcElement.parentNode.id){
                        todoList.submainDivParent = varB[i];      
                    }   
                }

        // THIS IS A BIG TEST ******************//
        // creating the input field
        new CreateElmt(todoList.taskInput,'input','task-input',todoList.submainDivParent,'').createElmt();
        // remove the add task button
        new DeleteElmt('.btnAddTask');
        // create an confirm task button
        todoList.btnConfTask = new CreateElmt(todoList.btnConfTask,'button','confTaskBtn',todoList.submainDivParent,'Confirm').createElmt();
        // create a cancel btn
        todoList.btnCancelTask = new CreateElmt(todoList.btnCancelTask,'button','cancelTaskBtn',todoList.submainDivParent,'Cancel').createElmt();
        // event listeners for both confirm and cancel task buttons
        new AddEvent(todoList.btnConfTask,todoList.confirmTask,'click').addEvent();
        new AddEvent(todoList.btnCancelTask,todoList.cancelTask,'click').addEvent();
    },
    confirmTask : function(e){
        console.log(e.srcElement.parentNode.id);
        // THIS IS A BIG TEST *****************//
        let varB = document.querySelectorAll('.submain-content');
        /*         console.log(varB);
                console.log(varA); */
                for (let i=0;i<=varB.length-1;i++){
                    if(varB[i].id==e.srcElement.parentNode.id){
                        todoList.submainDivParent = varB[i];      
                    }   
                }

        // THIS IS A BIG TEST ******************//
        // this condition enable us to stop adding the same task 
        // to the DOM multiple times
        //if(!document.querySelector('.task-title')){
            // create a task complete button
            todoList.taskComplete = new CreateElmt(todoList.taskComplete,'button','task-complete',todoList.submainDivParent,'O').createElmt();
            // add an Id attribute to the task complete button
            todoList.taskComplete.setAttribute('id',todoList.taskCount);
            // create the button that will display the name of the task
            todoList.taskDisplay = new CreateElmt(todoList.taskDisplay,'button','task-display',todoList.submainDivParent,document.querySelector('.task-input').value).createElmt();
            // add an Id attribute to the display task button
            todoList.taskDisplay.setAttribute('id',todoList.taskCount);

            // create the date button that will add a date if clicked, the taskDate has a class with a unique number because taskCount get incremented after each task is created. this is done in order to make each taskDate unique
            todoList.taskDate = new CreateElmt(todoList.taskDate,'input',`task-date${todoList.taskCount}`,todoList.submainDivParent,'').createElmt();
            // add an Id attribute to the delete task button
            todoList.taskDate.setAttribute('id',todoList.taskCount);
            todoList.taskDate.setAttribute('type','date');

            // create the delete button that will delete the current task if pressed
            todoList.taskDelete = new CreateElmt(todoList.taskDelete,'button','task-delete',todoList.submainDivParent,'delete').createElmt();
            // add an Id attribute to the delete task button
            todoList.taskDelete.setAttribute('id',todoList.taskCount);
            // deleting the ptask input, conf button, cancel button
            new DeleteElmt('.task-input','.confTaskBtn','.cancelTaskBtn')
            // create event listeners for complete task button
            new AddEvent(todoList.taskComplete,todoList.deleteTask,'click').addEvent();
            // create event listeners for delete task button
            new AddEvent(todoList.taskDelete,todoList.deleteTask,'click').addEvent();
            // create an Add task for the following task
            todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.submainDivParent,'Add Task').createElmt();
            // create event listeners for add task button
            new AddEvent(todoList.btnAddTask,todoList.initTask,'click').addEvent();
            // create event listeners for add task date button
            new AddEvent(todoList.taskDate,todoList.addDate,'input').addEvent();
            //new AddEvent(todoList.taskDate,todoList.addDate).addEvent();
            // increment the taskCount
            todoList.taskCount++;
        //}
    },
    cancelTask : function(e){
        console.log(e.srcElement.parentNode.id);
        // THIS IS A BIG TEST *****************//
        let varB = document.querySelectorAll('.submain-content');
        /*         console.log(varB);
                console.log(varA); */
                for (let i=0;i<=varB.length-1;i++){
                    if(varB[i].id==e.srcElement.parentNode.id){
                        todoList.submainDivParent = varB[i];      
                    }   
                }

        // THIS IS A BIG TEST ******************//
        // remove task input, confirm task btn, cancel task btn, h2 task
        new DeleteElmt('.task-input','.confTaskBtn','.cancelTaskBtn');
        // return the DOM to the initial condition
        // creating the add task again with the event listener
        todoList.btnAddTask = new CreateElmt(todoList.btnAddTask,'button','btnAddTask',todoList.submainDivParent,'Add Task').createElmt()
        new AddEvent(todoList.btnAddTask,todoList.initTask,'click').addEvent();
    },
    deleteTask : function(e){
        //console.log(e);
        //console.log(e.srcElement.id); // value of the id attribute of the button
        todoList.btntoDeleteId = e.srcElement.id;
        while(document.getElementById(todoList.btntoDeleteId)){
            document.getElementById(todoList.btntoDeleteId).remove();
        }
    },
    addDate : function(e){
        // this line below takes the event target which is the input date that we clicked on (the calendar when we choose a date), then go to the parent Node wich is .submain-content and grab all its children element to put them into an array using the Array.from() method. Finally we use that array to get the index of the element we clicked on wich is the the calendar date. we console.log that index
        todoList.inputDatetoDeleteId =e.srcElement.id;
        console.log(Array.from(e.target.parentNode.children).indexOf(e.target));
        // the inputDateIndex will store the index value
        todoList.inputDateIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
        // the line below get to the input date value, which means the date we selected on the calendar, the format is 'xxxx-xx-xx' therefore we use the split() method to get an array that will be used on the format date
        todoList.inputDateArray = e.srcElement.value.split('-');
        // storing the format() method result from the 'date-fns' library
        todoList.inputDateValue = format(new Date(todoList.inputDateArray[0], todoList.inputDateArray[1],todoList.inputDateArray[2]),  'PPPP');
        // the following command delete the right task-date to replace it with the date format selected.
        document.querySelector(`.task-date${todoList.inputDatetoDeleteId}`).remove();
        // creating an element that will have as a value the date value.
        todoList.taskDateNewEl = document.createElement('p');
        todoList.taskDateNewEl.innerText = todoList.inputDateValue;
        todoList.submainDiv.insertBefore(todoList.taskDateNewEl, todoList.submainDiv.children[todoList.inputDateIndex]);
        // addind the same Id attribute as the deleted input date calendar, so that we can delete the whole task if we want with the delete btn
        todoList.taskDateNewEl.setAttribute('id',todoList.inputDatetoDeleteId);
    },
}
// properties that call the constructor to create event listeners
todoList.btnAddProjectEvent = new AddEvent(todoList.btnAddProject,todoList.initProject,'click').addEvent();