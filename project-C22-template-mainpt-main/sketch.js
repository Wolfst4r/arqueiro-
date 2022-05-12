const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
//var playerArrow;
var arrow;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }
  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador
  palyer = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, palyer);

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );

  arrow = new PlayerArrow(
    playerArcher.body.position.x,
    playerArcher.body.position.y,
    100,
    10
 );


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage, palyer.position.x, palyer.position.y, 50, 180)

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150)

  Engine.update(engine);

   playerArcher.display();
  // arrow.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
