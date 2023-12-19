let tank1 = document.getElementById("tank1")

document.addEventListener("keydown", function moverTank1(event) {
    const currentPositionRight = parseInt(getComputedStyle(tank1).left, 10);
    const currentPositionLeft = parseInt(getComputedStyle(tank1).right, 10);

    //getComputedStyle pega um elemento css escolhido

    if (event.key === 'ArrowRight') {
      const newPosition = currentPositionRight + 10; // Ajuste conforme necessário
      tank1.style.left = newPosition + 'px';
    } else if(event.key === "ArrowLeft"){
        const newPosition = currentPositionLeft + 10; // Ajuste conforme necessário
        tank1.style.right = newPosition + 'px';
    }
  })







