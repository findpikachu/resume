function findNearest() {
    let menuTargets = document.querySelectorAll("[data-menu-target]")
    let distances = [...menuTargets].map((target) => Math.abs(target.offsetTop  - window.scrollY))
    let minIndex = distances.indexOf(Math.min(...distances))
    let current = menuTargets[minIndex]
    return current
}



    function animation() {
        let current = findNearest()
        current.classList.remove("offset")
    }

    window.addEventListener("scroll",() => {
        animation()
    })
