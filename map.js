let canvasBack = document.getElementById("background");
let ctxBack = canvasBack.getContext("2d");

canvasBack.width = 2000;
canvasBack.height = 600;

let background = {
  x: 0,
  y: 0,
  width: 2000,
  height: 600,
  draw() {
    ctxBack.fillstyle = "black";
    ctxBack.fillRect(0, 0, canvasBack.width, canvasBack.height);
  },
};

let canvasMap = document.getElementById("map");
let ctxMap = canvasMap.getContext("2d");

canvasMap.width = 2000;
canvasMap.height = 600;

//맵 그리기
let firstMap = {
  x: 0,
  y: 0,
  width: 2000,
  height: 600,
  time: 0,
  a: 1,
  draw() {
    this.time++;
    this.x -= 0.05;
    if (this.time % 3 == 0) {
      this.a -= 0.01;
    }
    ctxMap.globalAlpha = this.a;
    ctxMap.drawImage(firstMapImg, this.x, this.y, this.width, this.height);
  },
};

let firstMapImg = new Image();
firstMapImg.src = "images/Map/firstmap.png";
