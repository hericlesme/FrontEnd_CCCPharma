class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    addEventListeners(div) {
        // TODO
    }

    render() {
        this.innerHTML = `
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="" width="112" height="28">
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                  Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    Categorias
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                      Medicamentos
                  </a>
                  <a class="navbar-item">
                      Higiene Pessoal
                  </a>
                  <a class="navbar-item">
                      Cosméticos
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                      Alimentos
                  </a>
                </div>
              </div>
              </div>
              <div class="navbar-end">
                <div class="buttons">
                  <a class="button is-link">
                    <strong>Cadastre-se</strong>
                  </a>
                  <a class="button is-light">
                    Entrar
                  </a>
                </div>
              </div>
          </div>
        </nav>
        `
    }
}

try {
    customElements.define('nav-bar', Navbar);
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}