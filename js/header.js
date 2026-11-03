(() => {
  const container = document.querySelector("#header-container");
  if (!container) return;

  container.innerHTML = `
    <header>
      <div class="site-brand">
        <img src="imagens/brasaopoliciapenal.png" alt="Brasão da Polícia Penal" height="50">
        <h1><a href="index.html">Penitenciária I de Capela do Alto</a></h1>
      </div>
      <div class="menu">
        <button type="button" id="spanMenu" aria-controls="mySidenav" aria-expanded="false">&#9776; Menu</button>
        <span id="spanTel"><a href="tel:+551532678190">Tel: (15) 3267-8190</a></span>
      </div>
      <div id="menu-container"></div>
    </header>`;
})();
