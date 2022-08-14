

import { libs } from "./libs";
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
    const hr2 = document.createElement('hr');

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
    // const hr2Class = ''
    const divDivdeClass = 'b-example-divider d-flex justify-content-center'
    const btnDivideClass = 'btn btn-primay'

    libsHelper.stringToClass(divSidebar, divSidebarClass)
    libsHelper.stringToClass(a, aClass)
    libsHelper.stringToClass(img, imgClass)
    libsHelper.stringToClass(span, spanClass)
    // libsHelper.stringToClass(hr, hrClass)
    libsHelper.stringToClass(ul, ulClass)
    // libsHelper.stringToClass(hr2, hr2Class)
    libsHelper.stringToClass(divDivde, divDivdeClass)
    libsHelper.stringToClass(btnDivide, btnDivideClass)



    divSidebar.style = 'width: 280px; flex-grow: 1;'
    img.style = 'width: 30px'

    img.setAttribute('src', '../sandbox/public/todo.svg')


    const addProjectLi = () => {

        const li = document.createElement('li');
        const a = document.createElement('a');
        const svg = document.createElement('svg');

        const liClass = 'nav-item'
        const aCLass = 'nav-link active'
        const svgClass = 'bi me-2'


        // classes 
        libsHelper.stringToClass(li, liClass)
        libsHelper.stringToClass(a, aCLass)
        libsHelper.stringToClass(svg, svgClass)

        //a link Props
        a.innerText = 'Home'

        //SVG Props

        svg.setAttribute('width', 16)
        svg.setAttribute('height', 16)
        // svg.setAttribute('xlink', '#speedometer2')

        a.append(svg)

        li.append(a)

        return li
    }






    a.append(span, img)
    divDivde.append(btnDivide)

    divSidebar.append(a)
    divSidebar.append(hr)
    divSidebar.append(ul)
    divSidebar.append(hr)
    divSidebar.append(divDivde)

    return { divSidebar, addProjectLi, ul }

}