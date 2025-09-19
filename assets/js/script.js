document.addEventListener("DOMContentLoaded", () => {
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
  body.style.fontSize = "16px";
  document.cookie = `fontSize=16px; path=/; max-age=31536000`; // ** max-age=1 ano
}
