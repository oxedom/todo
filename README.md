# todo

Todo project is a advanced Vanlia JS Project using concepts such as:
Reavling moudle pattern, OOP, S.O.L.I.D  principle, pubsub and bootstrap.

Conclusion:


This is the first time using bootstrap and I quite enjoyed using it. It's nice having doccumantion for the styling and it's quite hard to break.
At first I built all my HTML and added my bootstrap classes in a sandbox index.html and from there
I manually built components using JS by looking at my HTML and seeing what elements each compoent needed. This project totally calls for JSX and somehow I made it work with too many doccument.createElement('div).

I  very much enjoyed using and learning about pubSub, it is quite a niffty design pattern to scale your apps by allowing API's to subscribe and publish/emmit data, I'm sure I will be seeing more of that pattern in the future.

Design patterns, I sure did enjoy reading about design patterns and concepts but it's obviously needs a lot of practice, I think I did okay, in hindsight I would create a globalStore to save all of my Data there and create a DOM spefic object to render all the HTML, Towards the end of my project I felt that I was running around functions trying to solve bugs where in reality things shouldn't be as tightly coupled, but leason has been learned!

The project isn't polished because I felt that I would waste too much time building Modals for no reason that would just give you instructions to use the app, it's not diffcult but just has a bit of a learning curve! 

Anyway I'm happy with the final project even though if I were to do it again it would be a lot different! 

pesduo code bellow  




                    |
                    |
                    |
                    |
                    |
                    V

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




