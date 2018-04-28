(function () {
    let works = document.querySelector("#works")
    let dropDownMenu = document.querySelector("#dropDownMenu")
    works.onmouseover = () => {
        dropDownMenu.classList.add("dropDownMenu")
        dropDownMenu.style.display = "block"
    }
    works.onmouseout = () => {
        dropDownMenu.classList.remove("dropDownMenu")
        dropDownMenu.style.display = "none"
    }

})()