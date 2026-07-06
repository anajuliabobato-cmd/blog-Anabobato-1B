// cria um constante que seleciona o botão no html
const botao = document.querySelector("button");
//cria um evento de click e chama a função botaoClicado
botao.addEventListener("click",botaoClicado);

//cria a funcão que fará com que o texto do numero zero some + 1 a cada click.
function botaoClicado() {
 let texto = botao.querySelector("span");
 texto.textContent++;
}

//####legendas:
//querySelector: seleciona o primeiro elemento que corresponde a um seletor CSS especificado.
//addEventListener: adiciona um evento de click, permitindo que vocẽ execute uma função nquando o evento ocorre.
// textContent: modifica o conteúdo de texto de um elemento HTML.
