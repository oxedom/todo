
export default
    (function () {
        //Hook for for content
        let content = document.getElementById('content')
        //Header

        const header = function () {

            const header = document.createElement('header')
            header.classList.add('navbar', 'fixed-top', 'navbar-dark', 'bg-dark')

            const nav = document.createElement('nav')
            header.append(nav)

            const a = document.createElement('a')
            nav.append(a)
            a.innerText = 'google.com'
            a.href = 'www.google.com'

            return header
        }


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
            content.append(header())

        }
          
    })()

