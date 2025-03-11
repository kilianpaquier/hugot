document.addEventListener("DOMContentLoaded", () => {
    const scrolltop = document.getElementById("btn-scrolltop")

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrolltop.classList.replace("animate__zoomOut", "animate__zoomIn") || scrolltop.classList.add("animate__zoomIn")
        scrolltop.classList.remove("d-none")
    }

    document.addEventListener("scroll", () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrolltop.classList.replace("animate__zoomOut", "animate__zoomIn") || scrolltop.classList.add("animate__zoomIn")
            scrolltop.classList.remove("d-none")
        } else {
            scrolltop.classList.replace("animate__zoomIn", "animate__zoomOut") || scrolltop.classList.add("animate__zoomOut")
        }
    })

    scrolltop.addEventListener("animationend", () => {
        if (scrolltop.classList.contains("animate__zoomOut")) {
            scrolltop.classList.add("d-none")
        }
    })

    scrolltop.addEventListener("click", () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
})
