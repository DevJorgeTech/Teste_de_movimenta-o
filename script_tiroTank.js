function criacaoDoTiro() {
  var tiroTank = document.createElement("span")
  tiroTank.id = "tiroTank"
  document.body.appendChild(tiroTank)
  tiroTank.style.display = "block"  
}

function position_animacaoDoTiro() {
  let tiroTankPositionHorizontal = parseInt(getComputedStyle(tank1).left);
  let tiroTankPositionVertical = parseInt(getComputedStyle(tank1).top);

  if (tank1.style.transform == "rotate(90deg)") { // Movimento para cima

    tiroTank.style.left = tiroTankPositionHorizontal + 40 + "px"
    tiroTank.style.top = tiroTankPositionVertical - 20 + "px"
    tiroTank.style.transform = 'rotate(90deg)';
    var movimentoTiro = setInterval(animacaoTiroTankMovimentoParaCima, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiro);
      document.body.removeChild(tiroTank)
    }, 5000);

  } else if (tank1.style.transform == "rotate(180deg)") { // Movimento para direita

    tiroTank.style.left = tiroTankPositionHorizontal + 90 + "px"
    tiroTank.style.top = tiroTankPositionVertical + 20 + "px"
    tiroTank.style.transform = 'rotate(180deg)';
    var movimentoTiro = setInterval(animacaoTiroTankMovimentoParaDireita, 100);

      setTimeout(() => {
        clearTimeout(movimentoTiro);
        document.body.removeChild(tiroTank)
      }, 5000);    

  } else if (tank1.style.transform == "rotate(-90deg)") { // Movimento para baixo

    tiroTank.style.left = tiroTankPositionHorizontal + 40 + "px"
    tiroTank.style.top = tiroTankPositionVertical + 60 + "px"
    tiroTank.style.transform = 'rotate(-90deg)';
    var movimentoTiro = setInterval(animacaoTiroTankMovimentoParaBaixo, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiro);
      document.body.removeChild(tiroTank)
    }, 5000);


  } else if (tank1.style.transform == "rotate(0deg)" || tank1.style.transform == "") { // Movimento para esquerda
    tiroTank.style.left = tiroTankPositionHorizontal + "px"
    tiroTank.style.top = tiroTankPositionVertical + 20 + "px"
    tiroTank.style.transform = 'rotate(0deg)';
    var movimentoTiro = setInterval(animacaoTiroTankMovimentoParaEsquerda, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiro);
      document.body.removeChild(tiroTank)
    }, 5000);

  }
}

function animacaoTiroTankMovimentoParaCima() {

  increment = -25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank).top)
  tiroTank.style.top = possitionTiroTank1 + increment + "px";

}

function animacaoTiroTankMovimentoParaDireita() {

  increment = +25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank).left)
  tiroTank.style.left = possitionTiroTank1 + increment + "px";
}

function animacaoTiroTankMovimentoParaBaixo() {

  increment = +25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank).top)
  tiroTank.style.top = possitionTiroTank1 + increment + "px";
}

function animacaoTiroTankMovimentoParaEsquerda() {

  increment = -25
  let possitionTiroTank1 = parseInt(getComputedStyle(tiroTank).left)
  tiroTank.style.left = possitionTiroTank1 + increment + "px";

}

