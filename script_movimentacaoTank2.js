document.addEventListener("keydown", function moverTank2(event) {
    let tank2PositionHorizontal = parseInt(getComputedStyle(tank2).left);
    let tank2PositionVertical = parseInt(getComputedStyle(tank2).top);
    //getComputedStyle pega um elemento css escolhido
  
    if (event.key === "d") { // Movimento para direita
      const newPositionTank2 = tank2PositionHorizontal + 10;
      tank2.style.left = newPositionTank2 + "px";
      tank2.style.transform = 'rotate(0deg)';
  
      if (tank2PositionHorizontal > window.innerWidth - 50) { // Barreira invisivel 
        const newPositionTank2 = tank2PositionHorizontal;
        tank2.style.left = newPositionTank2 + "px"
      }
  
  
    } else if (event.key === "a") { // Movimento para esquerda
  
      const newPositionTank2 = tank2PositionHorizontal - 10;
      tank2.style.left = newPositionTank2 + "px"
      tank2.style.transform = 'rotate(180deg)';
  
      if (tank2PositionHorizontal < -31) { // Barreira invisivel 
        const newPositionTank2 = tank2PositionHorizontal;
        tank2.style.left = newPositionTank2 + "px"
      }
  
  
    } else if (event.key === "w") { // Movimento para cima
  
      const newPositionTank2 = tank2PositionVertical - 10;
      tank2.style.top = newPositionTank2 + "px"
      tank2.style.transform = 'rotate(-90deg)';
  
      if (tank2PositionVertical < 0) { // Barreira invisivel 
        const newPositionTank2 = tank2PositionVertical;
        tank2.style.top = newPositionTank2 + "px"
      }
  
    } else if (event.key === "s") { // Movimento para baixo
  
      const newPositionTank2 = tank2PositionVertical + 10;
      tank2.style.top = newPositionTank2 + "px"
      tank2.style.transform = 'rotate(90deg)';
  
      if (tank2PositionVertical > window.innerHeight - 50) {  // Barreira invisivel 
        const newPositionTank2 = tank2PositionVertical;
        tank2.style.top = newPositionTank2 + "px"
      }
  
    } else if (event.key === "e") { // tiro do tank
      var tiroTank2 = document.getElementById("tiroTank2")  
  
      if (!document.body.contains(tiroTank2)) { // Impede que a tecla espaço seja apertada várias vezes seguidas
        criacaoDoTiroDoTank2()
        position_animacaoDoTiroDoTank2()
        animacao_reloadTank2()
      } else {
        return
      }
    }
  })
  
  
  
  
  
  
  