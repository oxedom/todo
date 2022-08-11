
export default
    (function () {
        alert('a')
        //Hook for for content
        let content = document.getElementById('content')
        //Header
        const header = function () {

            const header = document.createElement('header')
            const h1 = document.createElement('h1')
            header.append(h1)
            const btn = document.createElement('btn')
            btn.classList.add('btn')

            const div = document.createElement('div')
            div.append(header)
            div.append(btn)
            return div
        }()


        const main = function () {

            const container = document.createElement('div')
            const main = document.createElement('main')
            const nav = document.createElement('nav')
            container.append(main, nav)

            return container
        }()


        content.append(header, main)
        // (function () {

        //     }())



    })()

