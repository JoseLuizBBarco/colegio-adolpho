// * Corrige a leitura do cookie e aplica o tamanho da fonte salvo, se existir
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // * Aplica informações salvas em cookies
  const tamanhoFonte = getCookie("fontSize");
  if (tamanhoFonte) {
    document.body.style.fontSize = tamanhoFonte;
  }
  const contrasteAlto = getCookie("highContrast");
  if (contrasteAlto === "true") {
    document.body.classList.add("high-contrast");
    const iconContrast = document.getElementById("iconContrast");
    if (iconContrast) {
      iconContrast.classList.remove("moon");
      iconContrast.classList.add("sun");
      updateContrastIcon();
    }
  } else {
    updateContrastIcon();
  }
  const paginaAtual = getCookie("page");
  if (paginaAtual) {
    toggleContainer(`container-${paginaAtual}`);
  } else {
    toggleContainer("container-home");
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
  document.cookie = `page=home; path=/; max-age=31536000`; // ** max-age=1 ano
}
function infraestruturaBotão() {
  toggleContainer("container-infraestrutura");
  document.cookie = `page=infraestrutura; path=/; max-age=31536000`; // ** max-age=1 ano
}

function contatoBotão() {
  toggleContainer("container-contato");
  document.cookie = `page=contato; path=/; max-age=31536000`; // ** max-age=1 ano
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

// * Contraste
function contrast() {
  const body = document.body;
  const isHighContrast = body.classList.toggle("high-contrast");
  const iconContrast = document.getElementById("iconContrast");
  if (isHighContrast) {
    iconContrast.classList.remove("moon");
    iconContrast.classList.add("sun");
  } else {
    iconContrast.classList.remove("sun");
    iconContrast.classList.add("moon");
  }
  updateContrastIcon();
  document.cookie = `highContrast=${isHighContrast}; path=/; max-age=31536000`;
}
