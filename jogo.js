// CONSTANTES

// Largura e altura da tela
const larguraTela = 1200;
const alturaTela = 200;

// Largura e altura da planilha de sprites
const larguraSprite = 740;
const alturaSprite = 60;

// Quantidade de linhas e colunas da planilha de sprites
const linhas = 1;
const colunas = 7;

// ------------------------------------------------------------------------------

//FUNÇÕES


// MODELO DE OJBETO CAVALO
function Cavalo(src, nome, x, y) {
  this.src = src;
  this.nome = nome;
  this.origemX = x;
  this.origemY = y;
  this.velocidade = Math.random() * 10 + 10;
}


// CAVALO PARADO
function cavaloParado() {
  // Obter as medidas de largura e altura de um único sprite na planilha de sprites
  var largura = larguraSprite / colunas;
  var altura = alturaSprite / linhas;

  // Definir primeiro frame
  var curFrame = 0;

  // Contador de frames (quantos frames - definido aqui o valor máximo para um movimento completo)
  var frameCount = 7;

  // Coordenadas na tela para obter um único frame
  var srcX = 0;
  var srcY = 0;

  // Otenção da tela
  var tela = document.getElementById('canvas');

  // Configurando a largura e altura da tela
  tela.width = larguraTela;
  tela.height = alturaTela;

  // Define contexto da tela
  var ctx = tela.getContext("2d");

  // ATUALIZA FRAMES
  function atualizaFrame() {
    // Atualiza o índice do frame
    curFrame = ++curFrame % frameCount;

    // Calcula a coordenada x na planilha de sprites
    srcX = curFrame * largura;

    // Limpa frames
    ctx.clearRect(cavalo1.origemX, cavalo1.origemY, largura, altura);
    ctx.clearRect(cavalo2.origemX, cavalo2.origemY, largura, altura);
    ctx.clearRect(cavalo3.origemX, cavalo3.origemY, largura, altura);
    ctx.clearRect(cavalo4.origemX, cavalo4.origemY, largura, altura);
  }
  function desenha() {
    atualizaFrame();

    ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
    ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
    ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
    ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);
  }
  setInterval(desenha, 100);
}

// ANIMAÇÃO CAVALO
function animacaoCavalo() {
  // Obter as medidas de largura e altura de um único sprite na planilha de sprites
  var largura = larguraSprite / colunas;
  var altura = alturaSprite / linhas;

  // Definir primeiro frame
  var curFrame = 0;

  // Contador de frames (quantos frames - definido aqui o valor máximo para um movimento completo)
  var frameCount = 7;

  // Coordenadas na tela para obter um único frame
  var srcX = 0;
  var srcY = 0;

  // Otenção da tela
  var tela = document.getElementById('canvas');

  // Configurando a largura e altura da tela
  tela.width = larguraTela;
  tela.height = alturaTela;

  // Define contexto da tela
  var ctx = tela.getContext("2d");


  // ATUALIZA FRAMES
  function atualizaFrame() {
    // Atualiza o índice do frame
    curFrame = ++curFrame % frameCount;

    // Calcula a coordenada x na planilha de sprites
    srcX = curFrame * largura;

    // Limpa frames
    ctx.clearRect(cavalo1.origemX, cavalo1.origemY, largura, altura);
    ctx.clearRect(cavalo2.origemX, cavalo2.origemY, largura, altura);
    ctx.clearRect(cavalo3.origemX, cavalo3.origemY, largura, altura);
    ctx.clearRect(cavalo4.origemX, cavalo4.origemY, largura, altura);
  }


  // DESENHA CAVALOS
  function desenha() {

    // Dispara corrida
    atualizaFrame();
    cavalo1.origemX += cavalo1.velocidade;
    cavalo2.origemX += cavalo2.velocidade;
    cavalo3.origemX += cavalo3.velocidade;
    cavalo4.origemX += cavalo4.velocidade;

    // Desenha a imagem
    ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
    ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
    ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
    ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);

    // Verifica chegada e desenha posicao final
    if (cavalo1.origemX > 1000) {
      resultado = cavalo1.nome;
      cavalo1.origemX = cavalo1.OrigemX;
      cavalo2.origemX = cavalo2.OrigemX;
      cavalo3.origemX = cavalo3.OrigemX;
      cavalo4.origemX = cavalo4.OrigemX;

      ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
      ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
      ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
      ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);

      confereGanhador();
    }
    if (cavalo2.origemX > 1000) {
      resultado = cavalo2.nome;
      cavalo1.origemX = cavalo1.OrigemX;
      cavalo2.origemX = cavalo2.OrigemX;
      cavalo3.origemX = cavalo3.OrigemX;
      cavalo4.origemX = cavalo4.OrigemX;

      ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
      ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
      ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
      ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);

      confereGanhador();
    }
    if (cavalo3.origemX > 1000) {
      resultado = cavalo3.nome;
      cavalo1.origemX = cavalo1.OrigemX;
      cavalo2.origemX = cavalo2.OrigemX;
      cavalo3.origemX = cavalo3.OrigemX;
      cavalo4.origemX = cavalo4.OrigemX;

      ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
      ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
      ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
      ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);

      confereGanhador();
    }
    if (cavalo4.origemX > 1000) {
      resultado = cavalo4.nome;
      cavalo1.origemX = cavalo1.OrigemX;
      cavalo2.origemX = cavalo2.OrigemX;
      cavalo3.origemX = cavalo3.OrigemX;
      cavalo4.origemX = cavalo4.OrigemX;

      ctx.drawImage(cavalo1img, srcX, srcY, largura, altura, cavalo1.origemX, cavalo1.origemY, largura, altura);
      ctx.drawImage(cavalo2img, srcX, srcY, largura, altura, cavalo2.origemX, cavalo2.origemY, largura, altura);
      ctx.drawImage(cavalo3img, srcX, srcY, largura, altura, cavalo3.origemX, cavalo3.origemY, largura, altura);
      ctx.drawImage(cavalo4img, srcX, srcY, largura, altura, cavalo4.origemX, cavalo4.origemY, largura, altura);

      confereGanhador();
    }
  }
  setInterval(desenha, 100);
}


// CONFERE O VENCEDOR
function confereGanhador() {
  // Ver se o apostador ganhou
  if (resultado == apostacavalo) {
    dinheiro += quantidade;
    alert("Você ganhou!");
  } else {
    dinheiro -= quantidade;
    alert("Você perdeu!");
  }
  document.getElementById('comecar').disabled = false;

  // Salva dinheiro para próxima sessão
  var salvadinheiro = dinheiro;
  sessionStorage.setItem("salvadinheiro", salvadinheiro);

  // Inicia nova sessão
  location.reload();
  main();
}


// FUNÇÃO PRINCIPAL
function main() {

  // Recupera dinheiro
  document.getElementById('dinheiro').innerText = dinheiro;

  cavaloParado();
  // Event listener para o botão de Começar
  document.getElementById('comecar').onclick = function () {
    quantidade = parseInt(document.getElementById('quantidade').value);
    apostacavalo = parseInt(document.getElementById('apostacavalo').value);

    // Toca música
    var audio = new Audio('/assets/sound/rossinioverture.ogg');
      audio.play();

    if (dinheiro < quantidade) {
      alert('Você não tem dinheiro suficiente para a aposta');
    }
    else {
      // Começa o jogo
      this.disabled = true; // Dasativa o botão de Começar
      animacaoCavalo();
    }
  }
}

// ------------------------------------------------------------------------------

// INICIO

// Variáveis do apostadores
var dinheiro = 100, apostacavalo, quantidade;

// Teste pra ver se já não há dinheiro
if(sessionStorage.getItem("salvadinheiro") !== null) {
dinheiro = JSON.parse(sessionStorage.getItem("salvadinheiro"));;
}

// Instancia cavalos do jogo
var cavalo1 = new Cavalo("/assets/images/cavalo1.png", 1, 10, 10);
var cavalo1img = new Image();
cavalo1img.src = cavalo1.src;

var cavalo2 = new Cavalo("/assets/images/cavalo2.png", 2, 10, 40);
var cavalo2img = new Image();
cavalo2img.src = cavalo2.src;

var cavalo3 = new Cavalo("/assets/images/cavalo3.png", 3, 10, 70);
var cavalo3img = new Image();
cavalo3img.src = cavalo3.src;

var cavalo4 = new Cavalo("/assets/images/cavalo4.png", 4, 10, 100);
var cavalo4img = new Image();
cavalo4img.src = cavalo4.src;

// Carrega funções quando o documento for carregado
document.addEventListener("DOMContentLoaded", function (event) {
 
  main();

});
