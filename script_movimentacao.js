let tank1 = document.getElementById("tank1")

document.addEventListener("keydown", function moverTank1(event) {
  let tank1PositionHorizontal = parseInt(getComputedStyle(tank1).left, 10);
  let tank1PositionVertical = parseInt(getComputedStyle(tank1).top, 10);
  //getComputedStyle pega um elemento css escolhido

  if (event.key === "ArrowRight") {
    const newPosition = tank1PositionHorizontal + 10;
    tank1.style.left = newPosition + "px";
    tank1.style.transform = 'rotate(180deg)';

    if (tank1PositionHorizontal > 1250) { // Barreira invisivel 
      const newPosition = tank1PositionHorizontal;
      tank1.style.left = newPosition + "px"
    }


  } else if (event.key === "ArrowLeft") {

    const newPosition = tank1PositionHorizontal - 10;
    tank1.style.left = newPosition + "px"
    tank1.style.transform = 'rotate(0deg)';

    if (tank1PositionHorizontal < -30) { // Barreira invisivel 
      const newPosition = tank1PositionHorizontal;
      tank1.style.left = newPosition + "px"
    }


  } else if (event.key === "ArrowUp") {

    const newPosition = tank1PositionVertical - 10;
    tank1.style.top = newPosition + "px"
    tank1.style.transform = 'rotate(90deg)';

    if (tank1PositionVertical < 0) { // Barreira invisivel 
      const newPosition = tank1PositionVertical;
      tank1.style.top = newPosition + "px"
    }

  } else if (event.key === "ArrowDown") {

    const newPosition = tank1PositionVertical + 10;
    tank1.style.top = newPosition + "px"
    tank1.style.transform = 'rotate(-90deg)';

    if (tank1PositionVertical > 600) {  // Barreira invisivel 
      const newPosition = tank1PositionVertical;
      tank1.style.top = newPosition + "px"
    }

  }
})






