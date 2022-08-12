

import { libs } from "./libs";
export default function nav(){

    const libsHelper = libs()

    console.log(libsHelper.getID()); 

    function splitString (string) {
        return string.split(" ")
        }

    function classAdder (element,array) {
        array.forEach(string => {
            element.classList.add(string)
        });
    }

    const nav = document.createElement('nav')
        const div = document.createElement('div');
            const a = document.createElement('a');

    const navClass = 'navbar navbar-expand-md navbar-dark bg-dark'
    const divClass = 'container-fluid'
    const aClass = 'navbar-brand'



    classAdder(nav,splitString(navClass))
    classAdder(div,splitString(divClass))
    classAdder(a,splitString(aClass))    

    div.append(a)
    nav.append(div)

    return nav

}