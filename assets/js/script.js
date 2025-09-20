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

  // * Footer
  const currentYear = new Date().getFullYear();

  // Atualiza o texto do elemento com id 'currentYear', se existir
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});

function toggleAccessibilityMenu() {
  const menu = document.querySelector(".accessibility-menu");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}

function increaseFontSize() {
  const body = document.body;
  const currentSize = window.getComputedStyle(body).fontSize;
  const newSize = parseFloat(currentSize) + 2;
  body.style.fontSize = newSize + "px";
  document.cookie = `fontSize=${newSize}px; path=/; max-age=31536000`; // ** max-age=1 ano
}

function decreaseFontSize() {
  const body = document.body;
  const currentSize = window.getComputedStyle(body).fontSize;
  const newSize = Math.max(parseFloat(currentSize) - 2, 10); // tamanho mínimo de 10px
  body.style.fontSize = newSize + "px";
  document.cookie = `fontSize=${newSize}px; path=/; max-age=31536000`; // ** max-age=1 ano
}

function resetFontSize() {
  const body = document.body;
  body.style.fontSize = "1em";
  document.cookie = `fontSize=1em; path=/; max-age=31536000`; // ** max-age=1 ano
}

// Função para alternar alto contraste
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
