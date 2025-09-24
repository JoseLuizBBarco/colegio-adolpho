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
        <h2>Colégio Estadual Governador Adolpho de Oliveira Franco - EFMP</h2>
        <div class="location-info">
          <p>
            <span class="location icon"></span>
            Astorga, Paraná, Brasil
          </p>
        </div>
      </section>`;
  }

  // * Footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `
      <section class="colégio">
        <h3>Colégio Estadual Governador Adolpho de Oliveira Franco - EFMP</h3>
        <p>Educação de qualidade em Astorga, Paraná</p>
      </section>
      <section class="accessibility">
        <button onclick="toggleAccessibilityMenu()">
          <span class="accessibility"></span>
        </button>
        <div class="accessibility-menu">
          <button onclick="increaseFontSize()">
            <span class="increase-font"></span>
          </button>
          <button onclick="decreaseFontSize()">
            <span class="decrease-font"></span>
          </button>
          <button onclick="resetFontSize()">
            <span class="reset-font"></span>
          </button>
          <button onclick="contrast()">
            <span class="contrast"></span>
          </button>
        </div>
      </section>
      <section class="reference">
        Site desenvolvido por José Luiz
        Bruiani Barco para fins acadêmicos. Dados baseados no Censo Escolar e INEP.
      </section>`;
  }

  // * Current Year
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});

// * Cards que mudam de acordo com o botão clicado
function toggleContainer(containerId) {
  const cards = document.querySelectorAll("#mainContent .container");
  cards.forEach((card) => {
    card.classList.remove("active");
    card.classList.add("inactive");
  });
  const container = document.getElementById(containerId);
  if (container) {
    container.classList.add("active");
    container.classList.remove("inactive");
  }
}

// * Funções dos Botões de Navegação
function inícioBotão() {
  toggleContainer("container-home");
}

function contatoBotão() {
  toggleContainer("container-contato");
}

// * Mostra e oculta as opções de acessibilidade de acordo com o clique do botão
function toggleAccessibilityMenu() {
  const menu = document.querySelector(".accessibility-menu");
  if (menu) {
    const isHidden = menu.style.display === "none" || menu.style.display === "";
    menu.style.display = isHidden ? "flex" : "none";
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
  body.style.fontSize = "16px";
  document.cookie = `fontSize=16px; path=/; max-age=31536000`; // ** max-age=1 ano
}
