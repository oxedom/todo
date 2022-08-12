import { ar } from "date-fns/locale";

    


export function libs(){

    function splitString (string) {
        return string.split(" ")
        }

    function classAdder (element,array) {
        array.forEach(string => {
            element.classList.add(string)
        });
    }

    function stringToClass (element,string) {
        let arr = splitString(string)
        classAdder(element,ar)
    }

    function getID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

 

    return {getID,classAdder,splitString,stringToClass}

}


  




