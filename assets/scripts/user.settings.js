var userObj = { 'role': localStorage.getItem('role') };

setTimeout(() => {
    let $loginButton = document.querySelector("#log-in-button");
    $loginButton.addEventListener("click", () => {
        setTimeout(() => {
            userObj.role = localStorage.getItem('role');
            if (userObj.role == '')
                swal("Hmmmmm!", ("Parece que há algo de errado com seus dados."), "warning");
            updateActions();
        }, 500);
    })
}, 500);

setTimeout(() => {
    let $logoutButton = document.querySelector("#logout");
    $logoutButton.addEventListener("click", () => {
        setTimeout(() => {
            localStorage.setItem('role', '');
            userObj.role = '';
            updateActions();
        }, 500);
    })
}, 500);

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
    return userObj;
}())

function notify() {
    let productList = document.querySelector('.product-list');
    if (productList) {
        productList.products.forEach(product => {
            if (product.stock < 15) alertify.notify(product.name + ' está com o Estoque reduzido', 'error', 6);
        })
    }
}

function updateActions() {
    if (user.role) {
        commands.login.style.display = "none";
        commands.signup.style.display = "none"
        commands.logout.style.display = "flex";
        if (user.role == 'user') {
            commands.additem.style.display = "none";
            commands.report.style.display = "none";
        } else {
            notify();
            commands.additem.style.display = "flex";
            commands.report.style.display = "flex";
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
