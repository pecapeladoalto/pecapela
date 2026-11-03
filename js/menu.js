(() => {
  const container = document.querySelector("#menu-container");
  const botaoMenu = document.querySelector("#spanMenu");
  if (!container || !botaoMenu) return;

  container.innerHTML = `
    <nav id="mySidenav" class="sidenav" aria-label="Menu principal">
      <button type="button" class="closebtn" aria-label="Fechar menu">&times;</button>
      <a href="index.html">Página Inicial</a>
      <a href="documentacao.html">Documentações</a>
      <a href="calendario.html">Calendário de visitação</a>
      <a href="orientacao.html">Orientações para o dia <br> de visita</a>
      <a href="sedex.html">Sedex</a>
      <a href="aproximacao.html">Aproximação Familiar</a>
      <a href="srs.html">Reintegração Social</a>
      <a href="pix.html">Pix</a>
      <a href="peculio.html">Pecúlio</a>
      <a href="contatos.html">Contato</a>
      <a href="https://wa.me/551532678200?text=Menu" target="_blank">WhatsApp</a>
    </nav>`;

  const nav = container.querySelector("#mySidenav");
  const botaoFechar = nav.querySelector(".closebtn");

  botaoMenu.addEventListener("click", () => {
    nav.classList.add("openNav");
    botaoMenu.setAttribute("aria-expanded", "true");
  });

  botaoFechar.addEventListener("click", () => {
    nav.classList.remove("openNav");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.focus();
  });
})();
