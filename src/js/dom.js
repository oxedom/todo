import { add } from "date-fns";
import navbar from "./navbar"
import sidebar from "./sidebar"

export default
    (function () {
        //Hook for for content


        document.addEventListener('DOMContentLoaded', (e) => {
            console.log('pizza');
            let content = document.getElementById('content')
            const _nav = navbar()
            const _sidebar = sidebar().divSidebar


            content.append(_nav)
            const div = document.createElement('div');
            div.classList.add('row')
            div.append(_sidebar)
            content.append(div)
            document.querySelector('ul').append(sidebar().addProjectLi())



        })


    })()

