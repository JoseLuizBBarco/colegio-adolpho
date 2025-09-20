// * Corrige a leitura do cookie e aplica o tamanho da fonte salvo, se existir
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Aplica o tamanho da fonte salvo no cookie, se existir
  const tamanhoFonte = getCookie("fontSize");
  if (tamanhoFonte) {
    document.body.style.fontSize = tamanhoFonte;
  }
  
  // * Header
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `
    <span class="college icon"></span>
      <section class="location-info">
        <h1>Colégio Estadual Governador Adolpho de Oliveira Franco - EFMP</h1>
        <div class="location-info">
        <p>
          <span class="location icon"></span>
          Astorga, Paraná, Brasil
        </p>
        </div>
      </section>`;
  
  // * Footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `
      <section class="copyright">
        &copy; <span id="currentYear"></span>. Site desenvolvido por José Luiz
        Bruiani Barco.
      </section>`;
  }

  // * Current Year
  const currentYear = new Date().getFullYear();
});

// * Cards que mudam de acordo com o botão clicado
const cards = document.querySelectorAll("#mainContent .container");

// * Funções dos Botões de Navegação
function inícioBotão() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  const containerHome = document.querySelector("#container-home");
  containerHome.classList.add("active");
}

function contatoBotão() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  const containerContato = document.querySelector("#container-contato");
  containerContato.classList.add("active");
  
// * Mostra e oculta as opções de acessibilidade de acordo com o clique do botão  
function toggleAccessibilityMenu() {
  const menu = document.querySelector(".accessibility-menu");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}

// * Aumenta o tamanho da fonte
function increaseFontSize() {
  const body = document.body;
  const currentSize = window.getComputedStyle(body).fontSize;
  const newSize = parseFloat(currentSize) + 2;
  body.style.fontSize = newSize + "px";
  document.cookie = `fontSize=${newSize}px; path=/; max-age=31536000`; // ** max-age=1 ano
}

// * Diminui o tamanho da fonte
function decreaseFontSize() {
  const body = document.body;
  const currentSize = window.getComputedStyle(body).fontSize;
  const newSize = Math.max(parseFloat(currentSize) - 2, 10); // tamanho mínimo de 10px
  body.style.fontSize = newSize + "px";
  document.cookie = `fontSize=${newSize}px; path=/; max-age=31536000`; // ** max-age=1 ano
}

// * Reseta o tamanho da fonte
function resetFontSize() {
  const body = document.body;
  body.style.fontSize = "1em";
  document.cookie = `fontSize=1em; path=/; max-age=31536000`; // ** max-age=1 ano
}

// Função para alternar alto contraste
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
