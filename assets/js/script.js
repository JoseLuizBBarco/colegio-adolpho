const desenvolvedor = "José Luiz Bruiani Barco";
document.addEventListener("DOMContentLoaded", () => {
  // * Footer
  const currentYear = new Date().getFullYear();

  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  const currentYearHTML = document.querySelector("#currentYear");
  if (currentYearHTML) {
    currentYearHTML.innerHTML = currentYear;
  }
});
