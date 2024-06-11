//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificacolisaoborda();
  mostraraquete(xRaquete,yRaquete);
  movimentaminharaquete();
  //verificacolisaoraquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraraquete(xRaqueteOponente, yRaqueteOponente);
  movimentaraqueteoponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){ 
  circle (xBolinha,yBolinha,diametro)
  }
  
function movimentaBolinha(){
  xBolinha += velocidadexbolinha;
  yBolinha += velocidadeybolinha;
}

function verificacolisaoborda(){ 
   if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadexbolinha *= -1;
  }
  if (yBolinha + raio> height || yBolinha - raio< 0){
    velocidadeybolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x,y,raquetecomprimento,raquetealtura);
}

function movimentaminharaquete(){
    if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + 
    raqueteComprimento && yBolinha - raio < 
    yRaquete + raqueteAltura && yBolinha + raio > 
    yRaquete) {
    velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle
    (x, y, raquetecomprimento, 
    raquetealtura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadexbolinha *= -1;
    }
}

function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRaqueteOponente, 
    yRaqueteOponente, raquetecomprimento, raquetealtura, 
    xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadexbolinha *= -1;
    }
}


function movimentaraqueteoponente() {
   if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0))
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      
    }
}