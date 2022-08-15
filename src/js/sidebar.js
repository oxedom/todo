

import { it } from "date-fns/locale";
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
    const ulClass = 'nav nav-pills flex-column mb-auto bg-secondary bg-gradient'
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

    img.setAttribute('src', '../sandbox/public/todo.svg')
    formProject.setAttribute('action', 'submit')
    formProject.setAttribute('id', 'formProject')
    formTask.setAttribute('action', 'submit')
    formTask.setAttribute('id', 'formTask')
    formTask.setAttribute('name', 'taskForm')
    taskInput.setAttribute('name', 'taskName')
    input.setAttribute('name', 'name')




    //EVENT LISTNERS

    formProject.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        pubsub.publish('liSubmit', data.name)

        formProject.reset()
    })


    formTask.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        pubsub.publish('newTask', data)
        console.log(data);
        formTask.reset()
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

    function changeBtnColor(target) {
        if (target.classList.contains('active')) {
            let others = target.parentNode.parentNode.children
            others.forEach(li => {
                li.classList.remove('active')
                target.classList.add('active')
            })
        }
        else {
            let others = target.parentNode.parentNode.children
            others.forEach(li => {
                li.classList.remove('active')
                target.classList.add('active')
            })

        }
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