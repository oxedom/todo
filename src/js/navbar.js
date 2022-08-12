

import { libs } from "./libs";
export default function nav(){

    //INIT LIBS
    const libsHelper = libs()

    //CREATE ELEMENTS
    const nav = document.createElement('nav')
        const div = document.createElement('div');
            const a = document.createElement('a');

    //CLASS STRING FROM HTML BOILER PLATE
    const navClass = 'navbar navbar-expand-md navbar-dark bg-dark'
    const divClass = 'container-fluid'
    const aClass = 'navbar-brand'

    //SPLIT CLASS STRINGS AND THEN ADD THEM
    // libsHelper.classAdder(nav,libsHelper.splitString(navClass))
    // libsHelper.classAdder(div,libsHelper.splitString(divClass))
    // libsHelper.classAdder(a,libsHelper.splitString(aClass))    

    libsHelper.stringToClass(nav,navClass)
    libsHelper.stringToClass(div,divClass)
    libsHelper.stringToClass(a,aClass)


    div.append(a)
    nav.append(div)

    return nav

}