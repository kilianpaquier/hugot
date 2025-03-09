document.addEventListener("DOMContentLoaded", () => {
    // Close menu (if expanded) on scroll
    document.addEventListener("scroll", () => {
        const menu = document.getElementById("btn-menu-nav")
        if (menu.attributes.getNamedItem("aria-expanded").value === "true") {
            menu.click()
        }
    })

    // Setup tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Setup highlights copy buttons
    const highlights = document.getElementsByClassName("highlight")
    for (let i = 0; i < highlights.length; i++) {
        const highlight = highlights[i]

        const button = document.createElement("button")
        button.classList.add("btn", "btn-copy", "btn-transparent", "to-copy")
        button.addEventListener("click", () => {
            navigator.clipboard
                .writeText(highlight.firstElementChild.textContent)
                .then(() => {
                    button.classList.replace("to-copy", "copied")
                    setTimeout(() => button.classList.replace("copied", "to-copy"), 1000)
                })
                .catch((e) => {
                    button.classList.replace("to-copy", "not-copied")
                    setTimeout(() => button.classList.replace("not-copied", "to-copy"), 1000)
                    console.log(e)
                })
        })

        highlight.appendChild(button)
    }
})
