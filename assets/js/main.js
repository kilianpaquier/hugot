document.addEventListener("DOMContentLoaded", () => {
    // Close menu (if expanded) on scroll
    document.addEventListener("scroll", () => {
        const menu = document.getElementById("button-menu")
        if (menu.attributes.getNamedItem("aria-expanded").value === "true") {
            menu.click()
        }
    })

    // Setup tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})
