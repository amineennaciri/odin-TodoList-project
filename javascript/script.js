let btnProject = document.querySelector('.btnProject');
btnProject.addEventListener('click',runInput);
const leftDiv = document.querySelector('.left-side');

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
        document.querySelector('.main-content').appendChild(projectTitle);
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