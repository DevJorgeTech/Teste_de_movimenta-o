var altura = 0;
var largura = 0;


function ajustaTamanhoDoJogo() {
    altura = innerHeight;
    largura = innerWidth;
}

ajustaTamanhoDoJogo()

// spawn  do tank 

function posicaoRandomica() {
    var possitionX = Math.floor(Math.random() * largura) - 90;
    var possitionY = Math.floor(Math.random() * altura) - 90;

    possitionX = possitionX < 0 ? 0 : possitionX // evita que o tank spawne em posições negativas;
    possitionY = possitionY < 0 ? 0 : possitionY


    var tank = document.createElement("img") // Cria um elemento HTML no cado o tank
    tank.src = "tank1.png"
    tank.className = "imgTank1"
    tank.id = "tank1"
    tank.style.left = possitionX + "px"
    tank.style.top = possitionY + "px"
    document.body.appendChild(tank)
}



