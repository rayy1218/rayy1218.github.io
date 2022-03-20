function setDarkMode(theme) {
    if (theme === "dark") {
        $("body").addClass("bg-dark")
        $("body").addClass("text-light")
        $("#switch-light").addClass("btn-outline-light")
        $("#switch-light").addClass("text-light")
        $("body").removeClass("bg-light")
        $("body").removeClass("text-dark")
        $("#switch-light").removeClass("btn-outline-dark")
        $("#switch-light").removeClass("text-dark")
    }
    else if (theme === "light") {
        $("body").addClass("bg-light")
        $("body").addClass("text-dark")
        $("#switch-light").addClass("btn-outline-dark")
        $("#switch-light").addClass("text-dark")
        $("body").removeClass("bg-dark")
        $("body").removeClass("text-light")
        $("#switch-light").removeClass("btn-outline-light")
        $("#switch-light").removeClass("text-light")
    }
}

class Header {
    static html() {
        return `
            <div class="border-bottom border-3 mt-3 m-auto w-75 d-flex flex-row">
              <div class="me-auto">
                <a class="navbar-brand btn fs-1 text-primary" id="homeBtn" href="index.html">Home</a>
              </div>
              <div class="d-flex align-items-center">
                <a class="mx-2 text-decoration-none fs-5" id="resumeBtn" href="./resume.html">Resume</a>
                <a class="mx-2 text-decoration-none fs-5" id="portfolioBtn" href="portfolio.html">Portfolio</a>
                <a class="mx-2 text-decoration-none fs-5" id="contactBtn" href="contact.html">Contact</a>
                <button class="mx-2 fs-5 rounded-3 btn btn-outline-dark text-dark" id="switch-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
              </div>         
            </div>
        `
    }

    static setListener() {
        $("#switch-light").click(() => {
            let theme = window.sessionStorage.getItem("theme")
            if (theme === "light") {theme = "dark"}
            else if (theme === "dark") {theme = "light"}
            window.sessionStorage.setItem("theme", theme)
            setDarkMode(theme)
        })
    }


}

$(document).ready(() => {
    let theme = sessionStorage.getItem("theme")
    if (theme === "dark") {
        setDarkMode(theme)
    }
    else if (theme === "light" || theme == null) {
        sessionStorage.setItem("theme", "light")
        setDarkMode("light")
    }
})
