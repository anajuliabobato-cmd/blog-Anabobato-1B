// cria um constante que seleciona o botão no html
const botoes = document.querySelectorAll("button");
botoes.forEach(function(botao){ 
    let curtiu = false;
botao.addEventListener("click", botaoClicado); 

function botaoClicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");
if (curtiu === false){
    texto.textContent++;
    curtiu = true;
}
else{
    texto.textContent--;
    curtiu = false;
}
}
});

//####legendas:
//querySelector: seleciona o primeiro elemento que corresponde a um seletor CSS especificado.
//addEventListener: adiciona um evento de click, permitindo que vocẽ execute uma função nquando o evento ocorre.
// textContent: modifica o conteúdo de texto de um elemento HTML.
