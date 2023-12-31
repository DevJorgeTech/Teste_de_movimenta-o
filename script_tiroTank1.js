function criacaoDoTiroDoTank1() {
    var tiroTank1 = document.createElement("span")
    tiroTank1.id = "tiroTank1"
    document.body.appendChild(tiroTank1)
    tiroTank1.style.display = "block"
 
}

function position_animacaoDoTiroTank1() {
  let tiroTank1PositionHorizontal = parseInt(getComputedStyle(tank1).left);
  let tiroTank1PositionVertical = parseInt(getComputedStyle(tank1).top);

  if (tank1.style.transform == "rotate(90deg)") { // Movimento para cima
    tiroTank1.style.left = tiroTank1PositionHorizontal + 40 + "px"
    tiroTank1.style.top = tiroTank1PositionVertical - 20 + "px"
    tiroTank1.style.transform = 'rotate(90deg)';
    var movimentoTiroTank1 = setInterval(animacaoTiroTank1MovimentoParaCima, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank1);
      document.body.removeChild(tiroTank1)
    }, 4500);

  } else if (tank1.style.transform == "rotate(180deg)") { // Movimento para direita

    tiroTank1.style.left = tiroTank1PositionHorizontal + 90 + "px"
    tiroTank1.style.top = tiroTank1PositionVertical + 20 + "px"
    tiroTank1.style.transform = 'rotate(180deg)';
    var movimentoTiroTank1 = setInterval(animacaoTiroTank1MovimentoParaDireita, 100);

      setTimeout(() => {
        clearTimeout(movimentoTiroTank1);
        document.body.removeChild(tiroTank1)
      }, 4500);    

  } else if (tank1.style.transform == "rotate(-90deg)") { // Movimento para baixo

    tiroTank1.style.left = tiroTank1PositionHorizontal + 40 + "px"
    tiroTank1.style.top = tiroTank1PositionVertical + 60 + "px"
    tiroTank1.style.transform = 'rotate(-90deg)';
    var movimentoTiroTank1 = setInterval(animacaoTiroTank1MovimentoParaBaixo, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank1);
      document.body.removeChild(tiroTank1)
    }, 4500);


  } else if (tank1.style.transform == "rotate(0deg)" || tank1.style.transform == "") { // Movimento para esquerda
    tiroTank1.style.left = tiroTank1PositionHorizontal + "px"
    tiroTank1.style.top = tiroTank1PositionVertical + 20 + "px"
    tiroTank1.style.transform = 'rotate(0deg)';
    var movimentoTiroTank1 = setInterval(animacaoTiroTank1MovimentoParaEsquerda, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank1);
      document.body.removeChild(tiroTank1)
    }, 4500);

  }
}

function animacaoTiroTank1MovimentoParaCima() {

  increment = -25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank1).top)
  tiroTank1.style.top = possitionTiroTank1 + increment + "px";

}

function animacaoTiroTank1MovimentoParaDireita() {

  increment = +25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank1).left)
  tiroTank1.style.left = possitionTiroTank1 + increment + "px";
}

function animacaoTiroTank1MovimentoParaBaixo() {

  increment = +25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank1).top)
  tiroTank1.style.top = possitionTiroTank1 + increment + "px";
}

function animacaoTiroTank1MovimentoParaEsquerda() {

  increment = -25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank1).left)
  tiroTank1.style.left = possitionTiroTank1 + increment + "px";

}

