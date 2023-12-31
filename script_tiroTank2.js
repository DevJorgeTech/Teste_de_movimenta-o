function criacaoDoTiroDoTank2() {
    var tiroTank2 = document.createElement("span")
    tiroTank2.id = "tiroTank2"
    document.body.appendChild(tiroTank2)
    tiroTank2.style.display = "block"
 
}

function position_animacaoDoTiroDoTank2() {
  let tiroTank2PositionHorizontal = parseInt(getComputedStyle(tank2).left);
  let tiroTank2PositionVertical = parseInt(getComputedStyle(tank2).top);

  if (tank2.style.transform == "rotate(-90deg)") { // Movimento para cima
    tiroTank2.style.left = tiroTank2PositionHorizontal + 40 + "px"
    tiroTank2.style.top = tiroTank2PositionVertical - 20 + "px"
    tiroTank2.style.transform = 'rotate(90deg)';
    var movimentoTiroTank2 = setInterval(animacaoTiroTank2MovimentoParaCima, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank2);
      document.body.removeChild(tiroTank2)
    }, 4500);

  } else if (tank2.style.transform == "rotate(0deg)" || tank2.style.transform == "") { // Movimento para direita

    tiroTank2.style.left = tiroTank2PositionHorizontal + 90 + "px"
    tiroTank2.style.top = tiroTank2PositionVertical + 20 + "px"
    tiroTank2.style.transform = 'rotate(180deg)';
    var movimentoTiroTank2 = setInterval(animacaoTiroTank2MovimentoParaDireita, 100);

      setTimeout(() => {
        clearTimeout(movimentoTiroTank2);
        document.body.removeChild(tiroTank2)
      }, 4500);    

  } else if (tank2.style.transform == "rotate(90deg)") { // Movimento para baixo

    tiroTank2.style.left = tiroTank2PositionHorizontal + 40 + "px"
    tiroTank2.style.top = tiroTank2PositionVertical + 60 + "px"
    tiroTank2.style.transform = 'rotate(-90deg)';
    var movimentoTiroTank2 = setInterval(animacaoTiroTank2MovimentoParaBaixo, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank2);
      document.body.removeChild(tiroTank2)
    }, 4500);


  } else if (tank2.style.transform == "rotate(180deg)") { // Movimento para esquerda
    tiroTank2.style.left = tiroTank2PositionHorizontal + "px"
    tiroTank2.style.top = tiroTank2PositionVertical + 20 + "px"
    tiroTank2.style.transform = 'rotate(0deg)';
    var movimentoTiroTank2 = setInterval(animacaoTiroTank2MovimentoParaEsquerda, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank2);
      document.body.removeChild(tiroTank2)
    }, 4500);

  }
}

function animacaoTiroTank2MovimentoParaCima() {

  increment = -25
  let possitionTiroTank2 = parseInt(getComputedStyle(tiroTank2).top)
  tiroTank2.style.top = possitionTiroTank2 + increment + "px";

}

function animacaoTiroTank2MovimentoParaDireita() {

  increment = -25
  let possitionTiroTank2 = parseInt(getComputedStyle(tiroTank2).left)
  tiroTank2.style.left = possitionTiroTank2 - increment + "px";
}

function animacaoTiroTank2MovimentoParaBaixo() {

  increment = +25
  let possitionTiroTank2 = parseInt(getComputedStyle(tiroTank2).top)
  tiroTank2.style.top = possitionTiroTank2 + increment + "px";
}

function animacaoTiroTank2MovimentoParaEsquerda() {

  increment = -25
  let possitionTiroTank2 = parseInt(getComputedStyle(tiroTank2).left)
  tiroTank2.style.left = possitionTiroTank2 + increment + "px";

}

