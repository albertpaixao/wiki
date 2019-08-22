function graph() {


let canvas = document.getElementById('graph');
let windowWidth = tela.offsetWidth / 48;

canvas.height = dataBase.length * 20 + 50;
canvas.width = windowWidth * 48;
let ctx = canvas.getContext('2d');
let y = 0


function draw(inicio, final, projetoNome) {
  ctx.fillStyle = 'white'
  ctx.fillRect(inicio, y, final, 15);

/*
  ctx.fillStyle = 'red'
  ctx.font = '12px Times New Roman'
  ctx.fillText(projetoNome, 0, y+12);
  console.log('escrevi');
  */
}


function lerDatasProjetos() {
  for (var i = 0; i < dataBase.length; i++) {

    let mesInicio = parseInt(dataBase[i].dataInicio.slice(3,5));
    switch (mesInicio) {
      case 1:
        mesInicio = 0;
        break;
      case 2:
        mesInicio = 4;
        break;
      case 3:
        mesInicio = 8;
        break;
      case 4:
        mesInicio = 12;
        break;
      case 5:
        mesInicio = 16;
        break;
      case 6:
        mesInicio = 20;
        break;
      case 7:
        mesInicio = 24;
        break;
      case 8:
        mesInicio = 28;
        break;
      case 9:
        mesInicio = 32;
        break;
      case 10:
        mesInicio = 36;
        break;
      case 11:
        mesInicio = 40;
        break;
      case 12:
        mesInicio = 44;
        break;
    };



    let diaMesInicio = parseInt(dataBase[i].dataInicio.slice(0,2));

    switch (true) {
      case diaMesInicio>= 1 && diaMesInicio<= 7:
        diaMesInicio = 0;
        break;
      case diaMesInicio>= 8 && diaMesInicio<= 14:
        diaMesInicio = 1;
        break;
      case diaMesInicio>= 15 && diaMesInicio<= 21:
        diaMesInicio = 2;
        break;
      case diaMesInicio>= 22 && diaMesInicio<= 30:
        diaMesInicio = 3;
        break;
    }




    mesInicio = mesInicio + diaMesInicio
    mesInicio = mesInicio * windowWidth


    let mesFinal = parseInt(dataBase[i].dataFinal.slice(3,5)) - parseInt(dataBase[i].dataInicio.slice(3,5));
    switch (mesFinal) {
      case 0:
        mesFinal = 0;
        break;
      case 1:
        mesFinal = 4;
        break;
      case 2:
        mesFinal = 8;
        break;
      case 3:
        mesFinal = 12;
        break;
      case 4:
        mesFinal = 16;
        break;
      case 5:
        mesFinal = 20;
        break;
      case 6:
        mesFinal = 24;
        break;
      case 7:
        mesFinal = 28;
        break;
      case 8:
        mesFinal = 32;
        break;
      case 9:
        mesFinal = 36;
        break;
      case 10:
        mesFinal = 40;
        break;
      case 11:
        mesFinal = 44;
        break;
    };


    let diaMesFinal = parseInt(dataBase[i].dataFinal.slice(0,2)) - parseInt(dataBase[i].dataInicio.slice(0,2));

    switch (true) {
      case diaMesFinal>= 1 && diaMesFinal<= 7:
        diaMesFinal = 1;
        break;
      case diaMesFinal>= 8 && diaMesFinal<= 14:
        diaMesFinal = 2;
        break;
      case diaMesFinal>= 15 && diaMesFinal<= 21:
        diaMesFinal = 3;
        break;
      case diaMesFinal>= 22 && diaMesFinal<= 31:
        diaMesFinal = 4;
        break;
    }

    if (dataBase[i].dataFinal.slice(0,2) > 28 && diaMesFinal === 2) {
      diaMesFinal = diaMesFinal - 1;
    }


    mesFinal = mesFinal + diaMesFinal;
    mesFinal = mesFinal * windowWidth;

    let projetoNome = dataBase[i].nomeProjeto;


    draw(mesInicio, mesFinal, projetoNome);

    y += 20;
  }
}

function desenharTempoG (x) {
  ctx.strokeStyle = 'white'
  ctx.moveTo(x,y);
  ctx.lineTo(x,y-12);
  ctx.stroke()
}

function desenharTempoP (x) {
  ctx.strokeStyle = 'white'
  ctx.moveTo(x,y);
  ctx.lineTo(x,y-5);
  ctx.stroke()
}

function desenharMes (x, texto) {
  ctx.fillStyle = 'white'
  ctx.moveTo(x,y);
  ctx.lineTo(x,y-5);
  ctx.stroke()

  ctx.fillStyle = 'white'
  ctx.font = '12px Proza Libre'
  ctx.fillText(texto, x, y+15);
}


lerDatasProjetos();
y = y + 30

let meses = ['Jan', 'Fev' , 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
let mesesNum = [1,2,3,4,5,6,7,8,9,10,11,12]
let n = 0
function desenharTempo(){
  for (var i = 0; i < 49; i++) {
    if (i === 0 ||i === 4 ||i === 8 ||i === 12 ||i === 16 ||i === 20 ||i === 24 ||i === 28 ||i === 32 ||i === 36 ||i === 40 ||i === 44) {

        desenharTempoG(windowWidth * i);

        if (canvas.width < 420) {
          desenharMes(windowWidth * i, mesesNum[n])
        } else {
          desenharMes(windowWidth * i, meses[n])
        }

        n += 1;
    } else {
      desenharTempoP(windowWidth * i)
    }
  }
};

desenharTempo();
}


graph();

window.addEventListener("resize", function() {
	graph();
});

window.addEventListener("deviceorientation", function() {
	graph();
});
