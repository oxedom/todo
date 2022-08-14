import { libs } from "./libs";
import { pubsub } from './pubsub.js';

export default function tasks() {


    const libsHelper = libs()


    const divBody = document.createElement('div')
    const divContainer = document.createElement('div')
    const divRow = document.createElement('div')

    const divGap = document.createElement('div')

    const divBodyClass = 'col-8 container-sm bg-light card-body'
    const divContainerClass = 'container-md card m-2 p-1 mr-1'
    const divRowClass = 'container row'

    const divGapClass = 'col-1 bg-light'


    libsHelper.stringToClass(divBody, divBodyClass)
    libsHelper.stringToClass(divContainer, divContainerClass)
    libsHelper.stringToClass(divRow, divRowClass)

    libsHelper.stringToClass(divGap, divGapClass)

    divRow.style = 'gap: 10px'



    divContainer.append(divRow)
    divBody.append(divContainer)

    function createTask(taskObj) {

        const taskComp = document.createElement('div')
        const p = document.createElement('p')
        const btnDone = document.createElement('button')
        const btnRemove = document.createElement('button')
        const pClass = 'm-2 col-xl'
        const btnDoneClass = 'btn btn-outline-primary col-sm pl-2'
        const btnRemoveClass = 'btn btn-outline-danger col-sm'
        libsHelper.stringToClass(p, pClass)
        libsHelper.stringToClass(btnDone, btnDoneClass)
        libsHelper.stringToClass(btnRemove, btnRemoveClass)
        taskComp.append(p, btnRemove, btnDone)
        p.style = 'flex-grow: 10'
        // return taskComp

    }
    function appendTask(task) {
        divContainer.append(task)
    }


    return divBody
}