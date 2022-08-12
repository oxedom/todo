import navbar from "./navbar"

export default
    (function () {
        //Hook for for content
        let content = document.getElementById('content')
        
        const nav = navbar()


        document.addEventListener('DOMContentLoaded', () => {
            content.append(nav)

            const div = document.createElement('div');
            div.classList.add('row')
            
            content.append(div)

        })
    })()

