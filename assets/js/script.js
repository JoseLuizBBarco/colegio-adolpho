const desenvolvedor = "José Luiz Bruiani Barco";
document.addEventListener("DOMContentLoaded", () => {
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
  }

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
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
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
}
