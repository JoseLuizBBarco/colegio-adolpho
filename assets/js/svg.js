// * Ícone SVG
document.addEventListener("DOMContentLoaded", () => {
  const icons = [
    {
      className: "college",
      src: "assets/icons/college.svg",
      alt: "Ícone de escola",
    },
    {
      className: "location",
      src: "assets/icons/location.svg",
      alt: "Ícone de localização",
    },
    {
      className: "phone",
      src: "assets/icons/phone.svg",
      alt: "Ícone de telefone",
    },
    {
      className: "accessibility",
      src: "assets/icons/accessibility.svg",
      alt: "Ícone de acessibilidade",
    },
    {
      className: "increase-font",
      src: "assets/icons/increase-font.svg",
      alt: "Ícone de aumentar fonte",
    },
    {
      className: "decrease-font",
      src: "assets/icons/decrease-font.svg",
      alt: "Ícone de diminuir fonte",
    },
    {
      className: "reset-font",
      src: "assets/icons/reset-font.svg",
      alt: "Ícone de Resetar fonte",
    },
    {
      className: "contrast",
      src: "assets/icons/contrast.svg",
      alt: "Ícone de alto contraste",
    },
    {
      className: "book",
      src: "assets/icons/book.svg",
      alt: "Ícone de livro",
    },
    {
      className: "books",
      src: "assets/icons/books.svg",
      alt: "Ícone de uma estante com livros",
    },
    {
      className: "pc",
      src: "assets/icons/pc.svg",
      alt: "Ícone de computador",
    },
    {
      className: "microscopio",
      src: "assets/icons/microscopio.svg",
      alt: "Ícone de microscópio",
    },
    {
      className: "garfo-faca",
      src: "assets/icons/garfo-faca.svg",
      alt: "Ícone de garfo e faca",
    },
    {
      className: "predio",
      src: "assets/icons/predio.svg",
      alt: "Ícone de prédio",
    },
    {
      className: "cadeira-rodas",
      src: "assets/icons/cadeira-rodas.svg",
      alt: "Ícone de cadeira de rodas",
    },
  ];

  icons.forEach((icon) => {
    const elements = document.querySelectorAll(`span.${icon.className}`);
    elements.forEach((element) => {
      element.innerHTML = `<img src="${icon.src}" alt="${icon.alt}" class="icon" />`;
    });
  });
});
