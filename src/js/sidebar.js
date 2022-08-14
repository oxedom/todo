

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

    const form = document.createElement('form')
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
    const formClass = 'form-group m-2 p-1 input-group d-none'
    const inputClass = 'form-control'
    const submitBtnClass = 'btn btn-outline-primary'
    const formTaskClass = 'form-group m-2 p-1 input-group d-none'
    const formTaskDivClass = 'd-flex justify-content-center'

    libsHelper.stringToClass(divSidebar, divSidebarClass)
    libsHelper.stringToClass(img, imgClass)
    libsHelper.stringToClass(a, aClass)
    libsHelper.stringToClass(span, spanClass)
    // libsHelper.stringToClass(hr, hrClass)
    libsHelper.stringToClass(ul, ulClass)
    libsHelper.stringToClass(divDivde, divDivdeClass)
    libsHelper.stringToClass(btnProject, btnProjectClass)
    libsHelper.stringToClass(btnTask, btnTaskClass)
    libsHelper.stringToClass(form, formClass)
    libsHelper.stringToClass(formTask, formTaskClass)
    libsHelper.stringToClass(formTaskDiv, formTaskDivClass)

    libsHelper.stringToClass(input, inputClass)
    libsHelper.stringToClass(submitBtn, submitBtnClass)
    libsHelper.stringToClass(taskSubmitBtn, submitBtnClass)
    libsHelper.stringToClass(taskInput, inputClass)



    divSidebar.style = 'width: 280px;'
    span.innerText = 'Projects'
    img.style = 'width: 30px'
    btnProject.innerText = '+ New Project'
    btnTask.innerText = '+ Task'
    formDiv.style = 'width: 150px;'
    formTaskDiv.style = 'width: 200px'
    submitBtn.innerText = '+'
    taskSubmitBtn.innerText = '+'

    input.setAttribute('placeholder', 'New Project')
    taskInput.setAttribute('placeholder', 'New Task')

    img.setAttribute('src', '../sandbox/public/todo.svg')
    form.setAttribute('action', 'submit')
    form.setAttribute('id', 'form')
    formTask.setAttribute('action', 'submit')
    formTask.setAttribute('id', 'formTask')
    formTask.setAttribute('name', 'taskForm')
    taskInput.setAttribute('name', 'taskName')
    input.setAttribute('name', 'name')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        pubsub.publish('liSubmit', data)
        form.reset()
    })


    formTask.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libsHelper.getFormData(e)
        pubsub.publish('newTask', data)
        console.log(data);
        formTask.reset()
    })



    btnProject.addEventListener('click', (e) => {
        pubsub.publish('toogleForm', 'form')
    })

    btnTask.addEventListener('click', (e) => {
        pubsub.publish('toogleForm', 'formTask')
    })

    function toogleElement(id) {
        let element = document.getElementById(id)
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none')
        }
        else {
            element.classList.add('d-none')
        }

    }

    pubsub.subscribe('toogleForm', toogleElement)
    pubsub.subscribe('toogleTask', toogleElement)

    pubsub.subscribe('liSubmit', createLi)


    function createLi(text) {

        const li = document.createElement('li');
        const a = document.createElement('a');
        const svg = document.createElement('svg');

        const liClass = 'nav-item m-2'
        const aCLass = 'nav-link active'
        const svgClass = 'bi me-2'


        // classes 
        libsHelper.stringToClass(li, liClass)
        libsHelper.stringToClass(a, aCLass)
        libsHelper.stringToClass(svg, svgClass)


        //a link Props
        a.innerText = text

        //SVG Props

        svg.setAttribute('width', 16)
        svg.setAttribute('height', 16)
        // svg.setAttribute('xlink', '#speedometer2')

        a.append(svg)

        li.append(a)
        pubsub.publish('createLi', li)
        return li
    }


    pubsub.subscribe('createLi', bindLi)
    function bindLi(li) {
        document.querySelector('ul').append(li)
    }


    a.append(img, span)

    formDiv.append(input)
    form.append(submitBtn)
    form.append(formDiv)


    formTask.append(taskSubmitBtn, taskInput)
    formTaskDiv.append(formTask)

    divSidebar.append(a)
    divSidebar.append(btnProject)
    divSidebar.append(btnTask)
    divSidebar.append(form)
    divSidebar.append(formTaskDiv)
    divSidebar.append(hr)
    divSidebar.append(ul)
    divSidebar.append(divDivde)



    return { divSidebar, createLi, ul }

}

// Make a Small form unde the project GamepadButton, when new Project is pressed 
// it shows the little form by showing it's visablity and when you press sumbit it calls pupsub
//the calls add LI function