var altura = 0;
var largura = 0;


function ajustaTamanhoDoJogo() {
    altura = innerHeight;
    largura = innerWidth;
}

ajustaTamanhoDoJogo()

// spawn  do tank 

function posicaoRandomica() {
    var possitionTank1X = Math.floor(Math.random() * largura) - 90;
    var possitionTank1Y = Math.floor(Math.random() * altura) - 90;
    var possitionTank2X = Math.floor(Math.random() * largura) - 90;
    var possitionTank2Y = Math.floor(Math.random() * altura) - 90;

    possitionTank1X = possitionTank1X < 0 ? 0 : possitionTank1X // evita que o tank spawne em posições negativas;
    possitionTank1Y = possitionTank1Y < 0 ? 0 : possitionTank1Y
    possitionTank2X = possitionTank2X < 0 ? 0 : possitionTank2X 
    possitionTank2Y = possitionTank2Y < 0 ? 0 : possitionTank2Y


    var tank1 = document.createElement("img") // Cria um elemento HTML no caso o tank
    var tank2 = document.createElement("img") 
    tank1.src = "tank1.png"
    tank2.src = "tank2.jpeg"
    tank1.className = "imgTank1"
    tank2.className = "imgTank2"
    tank1.id = "tank1"
    tank2.id = "tank2"
    tank1.style.left = possitionTank1X + "px"
    tank1.style.top = possitionTank1Y + "px"
    tank2.style.left = possitionTank2X + "px"
    tank2.style.top = possitionTank2Y + "px"
    document.body.appendChild(tank1)
    document.body.appendChild(tank2)
}



