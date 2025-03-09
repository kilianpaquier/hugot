document.addEventListener("DOMContentLoaded", () => {
    const scrolltop = document.getElementById("btn-scrolltop")
    const scrollclass = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrolltop.classList.remove("d-none")
        } else {
            scrolltop.classList.add("d-none")
        }
    }

    scrollclass()
    document.addEventListener("scroll", scrollclass)
    scrolltop.addEventListener("click", () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
})
