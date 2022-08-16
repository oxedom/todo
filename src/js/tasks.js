import { el, id } from "date-fns/locale";
import { libs } from "./libs";
import { pubsub } from './pubsub.js';

export default function tasks() {


    const Task = function (taskObj) {

        let _taskName = taskObj.taskName
        let _taskProject = taskObj.project
        let dateCreated = new Date().getDate()
        let id = taskObj.id
        let status = false

        const changeStatus = () => {
            if(status) { status = false}
            else { status = true}
            console.log(status);
        }

        const getTaskProject = () => {
            return _taskProject
        }

        const getName = () => {
            return _taskName
        }

        const getId = () => {
            return id
        }
        return { getName, getTaskProject ,  getId, changeStatus}
    }

    const taskLogic = (function () {
        let _tasks = []

        const addTask = (task) => {
            _tasks.push(task)
            console.log(_tasks);
        }

        const removeTask = (id) => {

            let removeindex = undefined
           for (let index = 0; index < _tasks.length; index++) {
            if(_tasks[index].getId() == id ) {
                
                removeindex = index
            }
        
            if(removeindex != undefined || removeindex != -1) {
                _tasks.splice(removeindex, 1)
            }
           
           }

     
        }

        const changeStatusbyID = (id) => {

            let taskIndex = undefined
           for (let index = 0; index < _tasks.length; index++) {
            if(_tasks[index].getId() == id ) {
                
                taskIndex = index
            }
        
            if(taskIndex != undefined || taskIndex != -1) {
                _tasks[taskIndex].changeStatus()
            }
           
           }

     
        }





        return { addTask, removeTask, changeStatusbyID}
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
        const p2 = document.createElement('p')
        const btnDone = document.createElement('button')
        const btnRemove = document.createElement('button')
        const hr = document.createElement('hr')

        const pClass = 'm-2 col-xl'
        const p2Class = 'm-2 col-l'
        const btnDoneClass = 'btn btn-outline-primary col-sm pl-2'
        const btnRemoveClass = 'btn btn-outline-danger col-sm'
        libsHelper.stringToClass(p, pClass)
        libsHelper.stringToClass(p2,p2Class)
        libsHelper.stringToClass(btnDone, btnDoneClass)
        libsHelper.stringToClass(btnRemove, btnRemoveClass)
        taskComp.append(p, btnRemove, btnDone)
        btnDone.innerText = 'DONE'
        btnRemove.innerText = 'Remove'
        console.log(taskObj);
        p2.innerText = `Belongs to Project group: ${taskObj.project}`
        p.innerText = taskObj.taskName
        p.style = 'flex-grow: 10'
        taskComp.setAttribute('id', taskObj.id)
        taskComp.append(p,p2,btnRemove, btnDone, hr)

        btnDone.addEventListener('click', (e) => {pubsub.publish('handleDone', e.target.parentNode) })
        btnRemove.addEventListener('click',(e) => {pubsub.publish('handleRemove', e.target.parentNode) })

        return taskComp

    }

    pubsub.subscribe('handleDone', changeStatus)
    pubsub.subscribe('handleDone', changeStatusDom)
    pubsub.subscribe('handleRemove', removeFromDom )
    pubsub.subscribe('handleRemove', removeFromObj )
    function removeFromDom (el) {
        el.remove()
    }


    function changeStatus(element) {
        let id = element.id
        taskLogic.changeStatusbyID(id)
    }

    function changeStatusDom(element) {
        const btn = element.childNodes[3]
       
        if(btn.classList.contains('btn-success')){
            btn.classList.remove('btn-success')
        }
        else {
            btn.classList.add('btn-success')
        }
        
    }
 

    function removeFromObj (el) {
        taskLogic.removeTask(el.id)
    }



    function appendTask(task) {
        divRow.append(task)
    }

    pubsub.subscribe('newTask', (data) => {

        const newTask = createTaskDom(data)
        appendTask(newTask)
    })

    pubsub.subscribe('newTask', (data) => { createTaskMemory(data) })
 




    return divBody
}