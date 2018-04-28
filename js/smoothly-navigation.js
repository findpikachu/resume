(function () {
    let aTags = document.querySelectorAll("header>nav>ul>li>a")
    aTags.forEach((element) => {
        element.onclick = (event) => {
            event.preventDefault()
            let targetElement = document.querySelector(element.getAttribute("href"))
            window.scrollTo({"behavior": "smooth", "top": targetElement.offsetTop - 50});
        }
    })
    let menuTargets = document.querySelectorAll("[data-menu-target]")
    menuTargets.forEach((e) => e.classList.add("offset"))
})()