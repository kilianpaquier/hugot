// preferredColor returns the right theme depending on preferred color scheme of current OS
const preferredColor = function () {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light"
}

const themes = [
    { name: "system", theme: preferredColor() },
    (() => {
        const theme = preferredColor() === "dark" ? "light": "dark"
        return { name: theme, theme }
    })(),
    (() => {
        const theme = preferredColor() === "dark" ? "dark": "light"
        return { name: theme, theme }
    })(),
]

// getTheme returns the right index for themes slice
const getTheme = function () {
    const theme = localStorage.getItem("theme")
    if (!themes[theme]) {
        return 0
    }
    return parseInt(theme)
}

// update as fast as possible the theme to avoid rendering issues
document.documentElement.setAttribute("data-bs-theme", themes[getTheme()].theme ?? preferredColor())

// updateIcon updates the theme icon button
const updateIcon = function (theme) {
    switch (theme) {
        case "dark":
            document.getElementById("icon-theme-moon").classList.remove("d-none")
            document.getElementById("icon-theme-sun").classList.add("d-none")
            document.getElementById("icon-theme-system").classList.add("d-none")
            break
        case "light":
            document.getElementById("icon-theme-moon").classList.add("d-none")
            document.getElementById("icon-theme-sun").classList.remove("d-none")
            document.getElementById("icon-theme-system").classList.add("d-none")
            break
        default:
            document.getElementById("icon-theme-moon").classList.add("d-none")
            document.getElementById("icon-theme-sun").classList.add("d-none")
            document.getElementById("icon-theme-system").classList.remove("d-none")
            break
    }
}

// setup action and update icon when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-theme").addEventListener("click", () => {
        const theme = getTheme()
        const next = themes[theme+1] ?? themes[0]

        document.documentElement.setAttribute("data-bs-theme", next.theme ?? preferredColor())
        localStorage.setItem("theme", theme+1)
        updateIcon(next.name)
    })

    updateIcon(themes[getTheme()].name)
})
