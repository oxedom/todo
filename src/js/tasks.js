import { libs } from "./libs";
import { pubsub } from './pubsub.js';

export default function tasks() {


    const Task = function (taskObj) {

        let _taskName = taskObj.taskName
        let dateCreated = new Date().getDate()

        const removeSelf = () => {
            pubsub.publish('removeTask')
        }

        const getName = (prop) => {
            return _taskName
        }

        return { removeSelf, getName }
    }

    const taskLogic = (function () {
        const _tasks = []

        const addTask = (task) => {
            _tasks.push(task)
            console.log(_tasks);
        }

        const removeTask = (targetTask) => {
            _tasks = _tasks.filter(t => t = !targetTask)
        }

        return { addTask, removeTask }
    })()


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


    function createTaskMemory(taskObj) {
        let newTask = Task(taskObj)
        taskLogic.addTask(newTask)
    }


    function createTaskDom(taskObj) {

        const taskComp = document.createElement('div')
        const p = document.createElement('p')
        const btnDone = document.createElement('button')
        const btnRemove = document.createElement('button')
        const hr = document.createElement('hr')

        const pClass = 'm-2 col-xl'
        const btnDoneClass = 'btn btn-outline-primary col-sm pl-2'
        const btnRemoveClass = 'btn btn-outline-danger col-sm'
        libsHelper.stringToClass(p, pClass)
        libsHelper.stringToClass(btnDone, btnDoneClass)
        libsHelper.stringToClass(btnRemove, btnRemoveClass)
        taskComp.append(p, btnRemove, btnDone)
        btnDone.innerText = 'DONE'
        btnRemove.innerText = 'Remove'

        p.innerText = taskObj.taskName
        p.style = 'flex-grow: 10'
        taskComp.append(p, btnRemove, btnDone, hr)

        btnDone.addEventListener('click', pubsub.publish('handleDone'))
        btnRemove.addEventListener('click', pubsub.publish('handleRemove'))

        return taskComp

    }


    function appendTask(task) {
        divRow.append(task)
    }

    pubsub.subscribe('newTask', (data) => {

        const newTask = createTaskDom(data)
        appendTask(newTask)
    })

    pubsub.subscribe('newTask', (data) => { createTaskMemory(data) })
    pubsub.subscribe('removeTask', (task) => taskLogic.removeTask)




    return divBody
}