import navbar from "./navbar"

export default
    (function () {
        //Hook for for content
        let content = document.getElementById('content')
        
        const nav = navbar()

        const main = function () {

            const container = document.createElement('div')
            const main = document.createElement('main')
            const nav = document.createElement('nav')
            container.append(main, nav)
            container.classList.add('container')

            return container
        }()



        // (function () {

        //     }())

        document.addEventListener('DOMContentLoaded', () => {
            content.append(nav)



        })
    })()

