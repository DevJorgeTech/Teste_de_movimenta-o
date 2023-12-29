document.addEventListener("keydown", function moverTank1(event) {
  let tank1PositionHorizontal = parseInt(getComputedStyle(tank1).left);
  let tank1PositionVertical = parseInt(getComputedStyle(tank1).top);
  //getComputedStyle pega um elemento css escolhido

  if (event.key === "ArrowRight") { // Movimento para direita
    const newPosition = tank1PositionHorizontal + 10;
    tank1.style.left = newPosition + "px";
    tank1.style.transform = 'rotate(180deg)';

    if (tank1PositionHorizontal > window.innerWidth - 50) { // Barreira invisivel 
      const newPosition = tank1PositionHorizontal;
      tank1.style.left = newPosition + "px"
    }


  } else if (event.key === "ArrowLeft") { // Movimento para esquerda

    const newPosition = tank1PositionHorizontal - 10;
    tank1.style.left = newPosition + "px"
    tank1.style.transform = 'rotate(0deg)';

    if (tank1PositionHorizontal < -31) { // Barreira invisivel 
      const newPosition = tank1PositionHorizontal;
      tank1.style.left = newPosition + "px"
    }


  } else if (event.key === "ArrowUp") { // Movimento para cima

    const newPosition = tank1PositionVertical - 10;
    tank1.style.top = newPosition + "px"
    tank1.style.transform = 'rotate(90deg)';

    if (tank1PositionVertical < 0) { // Barreira invisivel 
      const newPosition = tank1PositionVertical;
      tank1.style.top = newPosition + "px"
    }

  } else if (event.key === "ArrowDown") { // Movimento para baixo

    const newPosition = tank1PositionVertical + 10;
    tank1.style.top = newPosition + "px"
    tank1.style.transform = 'rotate(-90deg)';

    if (tank1PositionVertical > window.innerHeight - 50) {  // Barreira invisivel 
      const newPosition = tank1PositionVertical;
      tank1.style.top = newPosition + "px"
    }

  } else if (event.key === " ") { // tiro do tank
    criacaoDoTiro()
    tiroTank.style.display = "block"
  }
})




function criacaoDoTiro() {
  var tiroTank = document.createElement("span")
  tiroTank.id = "tiroTank"
  document.body.appendChild(tiroTank)
  let tiroTankPositionHorizontal = parseInt(getComputedStyle(tank1).left);
  let tiroTankPositionVertical = parseInt(getComputedStyle(tank1).top);

  if (tank1.style.transform == "rotate(90deg)") { // Movimento para cima

    tiroTank.style.left = tiroTankPositionHorizontal + 40 + "px"
    tiroTank.style.top = tiroTankPositionVertical - 20 + "px"
    tiroTank.style.transform = 'rotate(90deg)';

  } else if (tank1.style.transform == "rotate(180deg)") { // Movimento para direita

    tiroTank.style.left = tiroTankPositionHorizontal + 90 + "px"
    tiroTank.style.top = tiroTankPositionVertical + 20 +"px"
    tiroTank.style.transform = 'rotate(180deg)';

  } else if (tank1.style.transform == "rotate(-90deg)") { // Movimento para baixo

    tiroTank.style.left = tiroTankPositionHorizontal + 40 + "px"
    tiroTank.style.top = tiroTankPositionVertical + 60 + "px"
    tiroTank.style.transform = 'rotate(-90deg)';

  } else if (tank1.style.transform == "rotate(0deg)") { // Movimento para esquerda
    tiroTank.style.left = tiroTankPositionHorizontal + "px"
    tiroTank.style.top = tiroTankPositionVertical + 20 + "px"
    tiroTank.style.transform = 'rotate(0deg)';

  } else if (tank1.style.transform == ""){
    tiroTank.style.left = tiroTankPositionHorizontal + "px"
    tiroTank.style.top = tiroTankPositionVertical + 20 + "px"
    tiroTank.style.transform = 'rotate(0deg)';   

  }


}