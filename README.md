# todo
Todo list project, an advanched vanlia JS project using concepts such as
the revealing moudle pattern, OOP S.O.L.I.D princiaples, pubsub and bootstrap.

The user can create todo projects
A user can create a todo that belongs to a projects
All the projects will be on the right hand side navbar 
(Two default projects will be included, personal and work)

A user can view all of his todos from his collection
A user can view a specific todo

//Code mockup
The App has the following:
Array of projects

Create a project popup (method)



Todo has the following:
title: 
description: 
dueDate: 
priority (Green, yellow, Red)
completed: boolean

methods: 
changeDue()
changePriority()
toogleCompleted()


projects:
name
description
array of todos
ViewTodos() 
DeleteTodo()
AddTodo()
moveTodo()

Dom moudle () {
    ChangeBackgroundColor()
    //ID
    removeElement(NEEDS A GOOD Parameter)
    createTodo()
    ShowTodos()
    changeText(NEEDS A GOOD Parameter)

}

npm i date-fns
webstorage api

//Pesdocode 
There will be a DOM object that is incharge of rendering the following:
Navbar (On Load)
UI Interface on load 
    Left hand side navbar  
        lists projects
        +Button that opens a popup
            "NEW PROJECT OR TODO"
    Main content 
        A list of all the todos by clicked Project (minimum detalis)
            Each Todo expands with all detatils

Factory Function for Project
Factory FUnction for Todo
Moudle DOM object.
Moudle Logic Object
Moudle App Logic
        



//RECAP

What I need the program to do
Select the first Project automaticlly

When a new task is created it will get pushed to the selected project array
After it belongs to a project array it's status can be changed and deleted 
When deleted it will be removed from array and THE DOM
when changed it's status will change and it's DOM bg will color will be green

When a differnet project task is toogled it will render only relevent tasks




