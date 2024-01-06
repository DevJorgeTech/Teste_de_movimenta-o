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
    var verificaMorte = setInterval(morteDoTank2Direita, 100);


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
    var verificaMorte = setInterval(morteDoTank2Esquerda, 100);

    setTimeout(() => {
      clearTimeout(movimentoTiroTank1);
      clearTimeout(verificaMorte);
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

function morteDoTank2Esquerda(){
  let possitionXTiroTank1 = parseInt(getComputedStyle(tiroTank1).left)
  let possitionYTiroTank1 = parseInt(getComputedStyle(tiroTank1).top)
  let possitionXTank2 =  parseInt(getComputedStyle(tank2).left)
  let possitionYTank2 =  parseInt(getComputedStyle(tank2).top)

  console.log((tank2.style.transform == "rotate(-90deg)" || tank2.style.transform == "90") + " Rotação");
  console.log((possitionYTiroTank1 > possitionYTank2 - 10 && possitionYTiroTank1 <= possitionYTank2 + 70) + "Direção vertical");
  console.log((possitionXTiroTank1 <= possitionXTank2  + 50 && possitionXTiroTank1 > possitionXTank2) + "Direção Horizontal");
  console.log(possitionYTiroTank1);
  console.log(possitionYTank2);


  if((tank2.style.transform == "rotate(0deg)" || tank2.style.transform == "") && 
    (possitionYTiroTank1 > possitionYTank2 - 10 && possitionYTiroTank1 <= possitionYTank2 + 50) &&
    (possitionXTiroTank1 <= possitionXTank2  + 50 && possitionXTiroTank1 > possitionXTank2)){ // Tiro da direita para esquerda
      alert("Morreu")   
  } else if ((tank2.style.transform == "rotate(-90deg)" || tank2.style.transform == "90") && 
    (possitionYTiroTank1 > possitionYTank2 - 10 && possitionYTiroTank1 <= possitionYTank2 + 70) &&
    (possitionXTiroTank1 <= possitionXTank2  + 50 && possitionXTiroTank1 > possitionXTank2)){
      alert("Morreu 2")   
  }

} 
// function morteDoTank2Direita(){
//   let possitionXTiroTank1 = parseInt(getComputedStyle(tiroTank1).left)
//   let possitionYTiroTank1 = parseInt(getComputedStyle(tiroTank1).top)
//   let possitionXTank2 =  parseInt(getComputedStyle(tank2).left)
//   let possitionYTank2 =  parseInt(getComputedStyle(tank2).top)

//   if(tank2.style.transform == "rotate(180deg)" && 
//     (possitionYTiroTank1 > possitionYTank2 - 5 && possitionYTiroTank1 <= possitionYTank2 + 50) &&
//     (possitionXTiroTank1 <= possitionXTank2  + 50 && possitionXTiroTank1 > possitionXTank2)){ // Tiro da direita para esquerda
//       alert("Morreu")   
//   }     
// } 

