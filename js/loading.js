(function () {
    setTimeout(() => {
        let loading = document.querySelector("#loading")
        let circle = document.querySelector("#circle")
        let innerCirile = document.querySelector("#innerCircle")
        circle.classList.remove("circle")
        innerCirile.classList.remove("innerCircle")
        loading.classList.remove("loading")
    },3000)
})()