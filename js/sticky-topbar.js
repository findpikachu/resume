(function () {
    window.addEventListener("scroll",(event) => {
        let header = document.querySelector("header")
        if (window.scrollY > 0) {
            header.classList.add("topNavBar")
        } else {
            header.classList.remove("topNavBar")
        }
        autoHighlightMenu()


    })

    function autoHighlightMenu() {

        let current = findNearest()
        let id = current.getAttribute("id")
        let navItem = document.querySelector(`a[href="#${id}"]`)
        let ulTag = navItem.parentNode.parentNode
        let liTags = ulTag.children
        let aTags = [...liTags].map((li) => li.children[0])
        aTags.forEach((aTag) => {
            if (aTag === navItem)
                navItem.classList.add("highlight")
            else
                aTag.classList.remove("highlight")
        })


    }
})()