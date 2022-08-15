import { add } from "date-fns";
import navbar from "./navbar"
import sidebar from "./sidebar"
import tasks from "./tasks";

export default
    (function () {
        //Hook for for content

        document.addEventListener('DOMContentLoaded', (e) => {

            let content = document.getElementById('content')
            const _nav = navbar()
            const _sidebar = sidebar().divSidebar
            const _tasks = tasks()

            content.append(_nav)
            const div = document.createElement('div');
            div.classList.add('row')
            div.append(_sidebar)
            div.append(_tasks)
            content.append(div)
        })


    })()

