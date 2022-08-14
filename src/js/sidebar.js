

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
    const input = document.createElement('input')
    const submitBtn = document.createElement('button')
    //Divder
    const divDivde = document.createElement('div');
    const btnDivide = document.createElement('button');

    //CLASS STRING FROM HTML BOILER PLATE
    const divSidebarClass = 'd-flex flex-column flex-shrink-0 p-3 bg-light col-3 border'
    const aClass = "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    const imgClass = 'm-2'
    const spanClass = 'fs-4'
    // const hrClass = ''
    const ulClass = 'nav nav-pills flex-column mb-auto'
    const divDivdeClass = 'b-example-divider d-flex justify-content-center'
    const btnDivideClass = 'btn btn-primay'
    const formClass = 'form-group m-2 p-1 input-group'
    const inputClass = 'form-control'
    const submitBtnClass = 'btn btn-outline-primary'




    libsHelper.stringToClass(divSidebar, divSidebarClass)
    libsHelper.stringToClass(img, imgClass)
    libsHelper.stringToClass(a, aClass)
    libsHelper.stringToClass(span, spanClass)
    // libsHelper.stringToClass(hr, hrClass)
    libsHelper.stringToClass(ul, ulClass)
    libsHelper.stringToClass(divDivde, divDivdeClass)
    libsHelper.stringToClass(btnDivide, btnDivideClass)
    libsHelper.stringToClass(form, formClass)
    libsHelper.stringToClass(input, inputClass)
    libsHelper.stringToClass(submitBtn, submitBtnClass)

    divSidebar.style = 'width: 280px;'
    span.innerText = 'Projects'
    img.style = 'width: 30px'
    btnDivide.innerText = '+ New Project'
    formDiv.style = 'width: 150px;'
    submitBtn.innerText = 'Add'


    img.setAttribute('src', '../sandbox/public/todo.svg')
    form.setAttribute('action', 'submit')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        pubsub.publish('formSubmit', e)
    })
    btnDivide.addEventListener('click', (e) => {


        ul.append(addProjectLi())
    })

    function logger(data) { console.log(data); }

    pubsub.subscribe('formSubmit', logger)


    const addProjectLi = (text) => {

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

        return li
    }


    a.append(img, span)
    divDivde.append(btnDivide)

    formDiv.append(input)
    form.append(submitBtn)
    form.append(formDiv)

    divSidebar.append(a)
    divSidebar.append(hr)
    divSidebar.append(ul)
    divSidebar.append(hr)
    divSidebar.append(divDivde)
    divSidebar.append(hr)
    divSidebar.append(form)


    return { divSidebar, addProjectLi, ul }

}

// Make a Small form unde the project GamepadButton, when new Project is pressed 
// it shows the little form by showing it's visablity and when you press sumbit it calls pupsub
//the calls add LI function