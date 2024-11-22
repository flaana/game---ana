let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
let pontuacaoDisplay = document.querySelector('#pontuacao')
let pontuacao = 0;

function iniciarJogo(){
pontuacao = 0;
pontuacaoDisplay.textContent = `Pontuação: ${pontuacao}`;
verificarColisao();

}

function pular(){
    if (personagem.classList != 'animar'){
        personagem.classList.add('animar')
        incrementarPontuacao();
    }
    setTimeout(function(){
        personagem.classList.remove('animar')
    },500)
}

function incrementarPontuacao(){
    pontuacao+=1;
    pontuacaoDisplay.textContent = `Pontuação: ${pontuacao}`;
}

function verificarColisao(){
    var testarColisao = setInterval(function(){

        var TopoPersonagem = parseInt(
          window.getComputedStyle(personagem).getPropertyValue('top')
        )
    
        var EsquerdaQuadrado = parseInt(
            window.getComputedStyle(quadrado).getPropertyValue('left')
          )
    
          if (EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && TopoPersonagem >= 130){
            quadrado.style.animation = 'none'
            quadrado.style.display = 'none'
            alert('Você perdeu! Sua pontuação final foi: ' + pontuacao);
            reiniciarJogo();
          }
    },10)
}

function reiniciarJogo(){
    quadrado.style.display = 'block';
    quadrado.style.animation = '';
    iniciarJogo();
}

iniciarJogo();


