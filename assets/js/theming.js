// getTheme returns either the storage theme or the prefered color scheme
const getTheme = function () {
    const theme = localStorage.getItem("theme")
    if (theme) {
        return theme
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light"
}

// update as fast as possible the theme to avoid rendering issues
document.documentElement.setAttribute("data-bs-theme", getTheme())

// updateIcon updates the theme icon button
const updateIcon = function (theme) {
    if (theme === "dark") {
        document.getElementById("icon-theme-sun").classList.remove("d-none")
        document.getElementById("icon-theme-moon").classList.add("d-none")
    } else {
        document.getElementById("icon-theme-moon").classList.remove("d-none")
        document.getElementById("icon-theme-sun").classList.add("d-none")
    }
}

// setup action and update icon when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button-theme").addEventListener("click", () => {
        const theme = getTheme() === "dark" ? "light": "dark"
        document.documentElement.setAttribute("data-bs-theme", theme)
        localStorage.setItem("theme", theme)
        updateIcon(theme)
    })
    updateIcon(getTheme())
})