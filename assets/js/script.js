document.addEventListener("DOMContentLoaded", () => {
  // * Header
  const header = document.querySelector("header");
  header.innerHTML = `<nav class='navbar'></nav><menu></menu>`;

  // * Footer
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  const footer = document.querySelector("footer");
  footer.innerHTML = `<section class='copyright'>&copy; ${currentYear} Your Company. All rights reserved.</section>`;
});
