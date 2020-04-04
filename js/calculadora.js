let listaDeBotoes = document.querySelectorAll(".btn");
let conteudoDoVisor = document.querySelector('#visor-interno');
let opIgual = document.querySelector('.igual');
let opApagar = document.querySelector('.apagar');
let opBack = document.querySelector('.back');


listaDeBotoes.forEach(botao => {
    botao.onclick = () => {
        if (botao.textContent == "=" || botao.textContent == "CE" || botao.textContent == " C ") {
            return;
        } else {
            conteudoDoVisor.innerHTML += botao.textContent
        }
    }
});

opIgual.onclick = () => {
    if (conteudoDoVisor.textContent.indexOf('%') >= 0) {
        // 10%50
        let conteudo = conteudoDoVisor.textContent.split("%")
        return conteudoDoVisor.innerHTML = conteudo[0] * conteudo[1] / 100;
    }
    let resultadoDaOp = eval(conteudoDoVisor.textContent)
    //    console.log(resultadoDaOp);
    conteudoDoVisor.innerHTML = resultadoDaOp;
}

opApagar.onclick = () => {
    conteudoDoVisor.innerHTML = " ";
}

opBack.onclick = () => {
    let number = conteudoDoVisor.textContent;
    number = number.substring(0, number.length - 1, 0);
    conteudoDoVisor.innerHTML = number;


}
