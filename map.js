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
    if (this.time % 100 == 0) {
      this.a -= 0.1;
    }
    ctxMap.globalAlpha = this.a;

    ctxMap.drawImage(firstMapImg, this.x, this.y, this.width, this.height);
  },
};

let firstMapImg = new Image();
firstMapImg.src = "images/Map/firstmap.png";
