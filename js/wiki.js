console.log('tô aqui');

// Tempo e data

let d = new Date();
let m = d.getMonth();
if (m <= 9) {
  m = m + 1;
  m = '0' + m.toString();
}

let dataAtual = d.getDate().toString() + '-' + m + '-' + d.getFullYear().toString()


// Estrututa dos dados

let dataBase = [];

function projeto(nomeProjeto, dataInicio, dataFinal) {
  this.nomeProjeto = nomeProjeto;
  this.dataInicio = dataInicio;
  this.dataFinal = dataFinal;
  this.acaoDatabase = [];

  dataBase.push(this);
}

function acao(nomeProjeto, nomeAcao, dataInicio, dataFinal, detalhes) {
  this.nomeAcao = nomeAcao;
  this.dataInicio = dataInicio;
  this.dataFinal = dataFinal;
  this.detalhes = detalhes;

  for (var i = 0; i < dataBase.length; i++) {
    if (dataBase[i].nomeProjeto === nomeProjeto) {
      dataBase[i].acaoDatabase.push(this);
    }
  }


}

///
/*Projetos*/
///

new projeto("EP - Noites Tranquilas", "12-07-2019", '12-09-2019');

new acao('EP - Noites Tranquilas', 'Composição e Produção', '12-07-2019', '22-08-2019', ['O processo de composição deste EP foi muito dinâmico e acelerado. Já vinha marinando um conceito de músicas representando o cotidiano de uma noite tranquila, familiar, intimista. Dentro dessa perspectiva fui criando várias faixas instrumentais que representavam pequenos fragmentos desse cotidiano moderno, com a presença de afetividade, tecnologia e reflexões', 'O processo de produção foi iniciado mas logo comecei a procrastinar e quase coloquei todo esse projeto na geladeira (prática muito do meu feitio...). Me organizei e iniciei uma maratona de produção buscando concluir os arranjos e as gravações o mais rápido possível. Foi um processo relativamente longo, com muitas idas e vindas, inspirações e luta... porém depois de vencer a inércia o trabalho foi se tornando cada vez mais fácil e prazeroso.'])
new acao('EP - Noites Tranquilas', 'Refinando Arranjos', '22-08-2019', '22-08-2019', ['Uma vez com as faixas bem gravadas e arranjadas inicei uma rodada extensa para elaborar as emoções refinando os arranjos, elemetos, estruturas, etc... Neste projeto as músicas chegaram em sua grande maioria prontas e com estruturas decentes, portanto não foi necessário muito trabalho nesta etapa.'])
new acao('EP - Noites Tranquilas', 'Mixagem', '23-08-2019', '02-09-2019', [''])
new acao('EP - Noites Tranquilas', 'Masterização', '02-09-2019', '03-09-2019', [''])

///


//
new projeto("Projetos Open Source", '17-08-2019', '21-08-2019');
//
new acao('Projetos Open Source', 'Brainstorm', '12-08-2019', '12-08-2019', ['A proposta é criar uma forma de glossário dos principais projetos públicos que desenvolvo ao longo do ano. Uma plataforma pra dividir projetos, ideias e também pra ajudar na noção de tempo e continuidade que um projeto pode ter.'])
new acao('Projetos Open Source', 'Pesquisa', '13-08-2019', '15-08-2019', ['A pesquisa veio pra trazer inspiração de outros projetos e estéticas. Me inspirei muito na proposta do Oscean do Devine'])
new acao('Projetos Open Source', 'Coding', '17-08-2019', '21-08-2019', ['Mão na massa em pensar formas de tornar as ideias em algo palpável na internet. Escolhi realizar a programação toda em Javascript puro afim de deixar o site super leve.'])
new acao('Projetos Open Source', 'teste', '18-08-2019', '19-08-2019', ['teste']);



//
// Loop Criando elementos na tela
//

function showHide(nomeClasse) {
  let elemento = document.getElementsByClassName(nomeClasse)

  for (var i = 0; i < elemento.length; i++) {
    elemento[i].classList.toggle('hide')
  }
}





let tela = document.getElementById('tela');

function lerAcoeseDetalhes(i) {
  let div = document.createElement('div')
  div.classList.add(i)
  div.classList.add('hide')
  for (var j = 0; j < dataBase[i].acaoDatabase.length; j++) {

    // Nome da Ação
    let h2 = document.createElement('h2')
    // h2.classList.add(i)
    // h2.classList.add('hide')
    let nomeAcao = document.createTextNode(dataBase[i].acaoDatabase[j].nomeAcao);
    h2.appendChild(nomeAcao);
    div.appendChild(h2);

    // Descrição & Detalhes da Ação
    for (var k = 0; k < dataBase[i].acaoDatabase[j].detalhes.length; k++) {

      let p = document.createElement('p')
      // p.classList.add(i)
      // p.classList.add('hide')
        let acaoDetalhes = document.createTextNode(dataBase[i].acaoDatabase[j].detalhes[k]);
        p.appendChild(acaoDetalhes);
        div.appendChild(p);

    }
  }
  tela.appendChild(div);
}

function lerAcoes(i) {
  let ul = document.createElement('ul')
  ul.classList.add(i)
  ul.classList.add('hide')
  for (var j = 0; j < dataBase[i].acaoDatabase.length; j++) {

    // Nome da Ação
    let li = document.createElement('li')
    // li.classList.add(i)
    // li.classList.add('hide')
    let nomeAcao = document.createTextNode(dataBase[i].acaoDatabase[j].nomeAcao);
    li.appendChild(nomeAcao);
    ul.appendChild(li);

  }

  tela.appendChild(ul);
}

function lerProjetos() {
  for (var i = 0; i < dataBase.length; i++) {

    // Projetos
    let h1 = document.createElement('h1')
    h1.id = i;
    h1.classList.add('p-2')
    h1.setAttribute("onclick", 'showHide('+ i +')');
    let nomeProjeto = document.createTextNode(i+1 + ')' + ' ' + dataBase[i].nomeProjeto);
    h1.appendChild(nomeProjeto);
    tela.appendChild(h1);

    lerAcoes(i);
    lerAcoeseDetalhes(i);

  }
}


lerProjetos();
