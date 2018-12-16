const commands = (function () {
    return {
        "signup": document.querySelector("#sign-up"),
        "login": document.querySelector("#login"),
        "additem": document.querySelector("#add-item"),
        "logout": document.querySelector("#logout"),
        "report": document.querySelector("#report-button")
    }
}())

const user = (function () {
    // change role to see admin-options while acessing the website
    // only working like this because auth-system is not integrated yet

    return { 'role': 'admin' }
    //return { 'role': 'user' }
    //return null;
}())

function updateActions() {
    if (user) {
        commands.login.style.display = "none";
        commands.signup.style.display = "none"
        commands.logout.style.display = "flex";
        if (user.role == 'user') {
            commands.additem.style.display = "none";
            commands.report.style.display = "none";
        } else {
            commands.additem.style.display = "flex";
        }
    } else {
        commands.report.style.display = "none";
        commands.logout.style.display = "none";
        commands.login.style.display = "flex";
        commands.signup.style.display = "flex"
        commands.additem.style.display = "none";
    }
}

updateActions();