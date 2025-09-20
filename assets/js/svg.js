// * Ícone SVG
document.addEventListener("DOMContentLoaded", () => {
  // * Ícone da escola
  const collegeIcon = document.querySelectorAll("span.college");
  collegeIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school h-8 w-8 text-white" aria-hidden="true"><path d="M14 22v-4a2 2 0 1 0-4 0v4"></path><path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"></path><path d="M18 5v17"></path><path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"></path><path d="M6 5v17"></path><circle cx="12" cy="9" r="2"></circle></svg>`;
  });

  //   * Ícone de Localização
  const locationIcon = document.querySelectorAll("span.location");
  locationIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-8 w-8 text-white" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
  });

  //  * Ícone de Acessibilidade
  const accessibilityIcon = document.querySelectorAll("span.accessibility");
  accessibilityIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520H120v-80h720v80H600v520h-80v-240h-80v240h-80Z"/></svg>`;
  });

  // * Ícone de Aumentar Fonte
  const increaseFontIcon = document.querySelectorAll("span.increase-font");
  increaseFontIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>`;
  });

  // * Ícone de Diminuir Fonte
  const decreaseFontIcon = document.querySelectorAll("span.decrease-font");
  decreaseFontIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm384-16v-80h320v80H600Z"/></svg>`;
  });

  // * Ícone de Resetar Fonte
  const resetFontIcon = document.querySelectorAll("span.reset-font");
  resetFontIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m528-546-93-93-121-121h486v120H568l-40 94ZM792-56 460-388l-80 188H249l119-280L56-792l56-56 736 736-56 56Z"/></svg>`;
  });

  // * Ícone de Alto Contraste
  const contrastIcon = document.querySelectorAll("span.contrast");
  contrastIcon.forEach((icon) => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>`;
  });
});
