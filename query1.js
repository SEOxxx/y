 function carregarScriptAutomaticamente() {
  var scriptTag = document.createElement('script');
  var url = 'https://raw.githubusercontent.com/SEOxxx/y/main/query.js';

  fetch(url)
    .then(response => response.text())
    .then(conteudo => {
      scriptTag.textContent = conteudo;
      document.head.appendChild(scriptTag);
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JavaScript:', error);
    });
}

carregarScriptAutomaticamente();
