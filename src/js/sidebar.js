

import { it, ta } from "date-fns/locale";
import { libs } from "./libs";
import { pubsub } from './pubsub.js';
export default function sidebar() {

    //INIT LIBS
    const libsHelper = libs()

    //CREATE ELEMENTS
    const divSidebar = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const hr = document.createElement('hr');
    const ul = document.createElement('ul')

    const formProject = document.createElement('form')
    const formDiv = document.createElement('div')

    const formTask = document.createElement('form')
    const formTaskDiv = document.createElement('div')
    const taskSubmitBtn = document.createElement('button')
    const taskInput = document.createElement('input')
    const taskTextArea = document.createElement('area')



    const input = document.createElement('input')
    const submitBtn = document.createElement('button')
    //Divder
    const divDivde = document.createElement('div');
    const btnProject = document.createElement('button');
    const btnTask = document.createElement('button');


    //CLASS STRING FROM HTML BOILER PLATE
    const divSidebarClass = 'd-flex flex-column flex-shrink-0 p-3 bg-light col-3 border'
    const aClass = "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    const imgClass = 'm-2'
    const spanClass = 'fs-4'
    // const hrClass = ''
    const ulClass = 'nav nav-pills flex-column mb-auto'
    const divDivdeClass = 'b-example-divider d-flex justify-content-center'
    const btnProjectClass = 'btn btn-primay'
    const btnTaskClass = 'btn btn-primay m-2'
    const formProjectClass = 'form-group m-2 p-1 input-group d-none'
    const inputClass = 'form-control'
    const submitBtnClass = 'btn btn-outline-primary'
    const formTaskClass = 'form-group m-2 p-1 input-group d-none'
    const formTaskDivClass = 'd-flex justify-content-center'
    //CLASSING ELEMENTS

    libsHelper.stringToClass(divSidebar, divSidebarClass)
    libsHelper.stringToClass(img, imgClass)
    libsHelper.stringToClass(a, aClass)
    libsHelper.stringToClass(span, spanClass)
    // libsHelper.stringToClass(hr, hrClass)
    libsHelper.stringToClass(ul, ulClass)
    libsHelper.stringToClass(divDivde, divDivdeClass)
    libsHelper.stringToClass(btnProject, btnProjectClass)
    libsHelper.stringToClass(btnTask, btnTaskClass)
    libsHelper.stringToClass(formProject, formProjectClass)
    libsHelper.stringToClass(formTask, formTaskClass)
    libsHelper.stringToClass(formTaskDiv, formTaskDivClass)

    libsHelper.stringToClass(input, inputClass)
    libsHelper.stringToClass(submitBtn, submitBtnClass)
    libsHelper.stringToClass(taskSubmitBtn, submitBtnClass)
    libsHelper.stringToClass(taskInput, inputClass)


    //SETTINGS PROPS
    divSidebar.style = 'width: 280px;'
    span.innerText = 'Projects'
    img.style = 'width: 30px'
    btnProject.innerText = '+ New Project'
    btnTask.innerText = '+ Task'
    formDiv.style = 'width: 150px;'
    formTaskDiv.style = 'width: 200px'
    submitBtn.innerText = '+'
    taskSubmitBtn.innerText = '+'


    //SETTING ATTS
    input.setAttribute('placeholder', 'New Project')
    taskInput.setAttribute('placeholder', 'New Task')
    ul.setAttribute('id', 'projectUl')
    img.setAttribute('src', '../sandbox/public/todo.svg')
    formProject.setAttribute('action', 'submit')
    formProject.setAttribute('id', 'formProject')
    formTask.setAttribute('action', 'submit')
    formTask.setAttribute('id', 'formTask')
    formTask.setAttribute('name', 'taskForm')
    taskInput.setAttribute('name', 'taskName')
    input.setAttribute('name', 'name')


    const sidebarMemory = (function () {
        const projects = []

        const addProject = (p) => {
            projects.push(p)
            console.log(projects);
        }

        const getLength = () => {
            return projects.length
        }

        return { addProject, getLength }

    }

    )()

    const Project = function (projectName) {
        let name = projectName.name
        let dateCreated = new Date().getDate()

        return { name, dateCreated }
    }


    //EVENT LISTNERS

    formProject.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        pubsub.publish('liSubmit', data.name)
        pubsub.publish('newProject', data)
        formProject.reset()
    })



    function handleNewProject(data) {
        let newP = Project(data)
        sidebarMemory.addProject(newP)
    }

    pubsub.subscribe('newProject', handleNewProject)

    formTask.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        let selected = document.get


        const project = document.querySelectorAll('[selected="true"]');
        if(project.length == 0) {
            alert('Need to Select Project')
        }
        else {
            console.log('weeee wewwe');

            console.log(project);
            data.project = project[0].innerText
            data.id = libsHelper.getID()
            console.log((data));

    
            if (sidebarMemory.getLength() >= 1) {
                pubsub.publish('newTask', data)
                formTask.reset()
            }
            else {
                alert('NEED ATLEAST ONE PROJECT')
            }
        }

    })



    btnProject.addEventListener('click', (e) => {
        pubsub.publish('toogleForm', 'formProject')
    })

    btnTask.addEventListener('click', (e) => {
        pubsub.publish('toogleTask', 'formTask')
    })



    pubsub.subscribe('toogleForm', libsHelper.toogleElement)
    pubsub.subscribe('toogleTask', libsHelper.toogleElement)

    pubsub.subscribe('liSubmit', createLi)

    function createLi(text) {

        const li = document.createElement('li');
        const a = document.createElement('a');



        const liClass = 'nav-item m-2'
        const aCLass = 'nav-link active'


        // classes 
        libsHelper.stringToClass(li, liClass)
        libsHelper.stringToClass(a, aCLass)



        //a link Props
        a.innerText = text



        li.append(a)

        pubsub.publish('createLi', li)
        li.addEventListener('click', (e) => { pubsub.publish('projectClicked', e.target) })
        return li
    }


    pubsub.subscribe('projectClicked', changeBtnColor)

    pubsub.subscribe('projectClicked', setSelectedLi)


    function setSelectedLi(target) {
        let liList = document.getElementById('projectUl').childNodes
        for (let index = 0; index < liList.length; index++) {
            liList[index].removeAttribute('selected')
            liList[index].childNodes.forEach(child => { child.removeAttribute('selected') })
            target.setAttribute('selected', 'true')
        }
    }



    function changeBtnColor(target) {
        let liList = document.getElementById('projectUl').childNodes
        for (let index = 0; index < liList.length; index++) {
            liList[index].classList.remove('bg-success')
            liList[index].childNodes.forEach(child => { child.classList.remove('bg-success') })

        }
        target.classList.add('bg-success')
    }



    pubsub.subscribe('createLi', bindLi)
    function bindLi(li) {
        document.querySelector('ul').append(li)
    }


    a.append(img, span)

    formDiv.append(input)
    formProject.append(submitBtn)
    formProject.append(formDiv)


    formTask.append(taskSubmitBtn, taskInput)
    formTaskDiv.append(formTask)

    divSidebar.append(a)
    divSidebar.append(btnProject)
    divSidebar.append(btnTask)
    divSidebar.append(formProject)
    divSidebar.append(formTaskDiv)
    divSidebar.append(hr)
    divSidebar.append(ul)
    divSidebar.append(divDivde)



    return { divSidebar }

}

// Make a Small form unde the project GamepadButton, when new Project is pressed 
// it shows the little form by showing it's visablity and when you press sumbit it calls pupsub
//the calls add LI function