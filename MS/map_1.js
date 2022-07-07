let canvasMap = document.getElementById("map");
let ctxMap = canvasMap.getContext("2d");

canvasMap.width = 2000;
canvasMap.height = 600;

let backgroundImg = new Image();
backgroundImg.src = "images/Map/first.png";

//배경 객체선언 및 할당
let background = {
  x: 0,
  y: 0,
  width: 2000,
  height: 600,
  draw() {
    ctxMap.fillStyle = "black";
    ctxMap.fillRect(this.x, this.y, this.width, this.height);
    // ctxMap.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
  },
};

// //첫번째 스테이지 장애물
// class HurdleFirst {
//   constructor({ x, y, width, height }) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.eat = false;
//   }
//   draw() {
//     this.x--;
//     ctx.fillStyle = "yellow";
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     ctx.drawImage(imgJelly, this.x, this.y, this.width, this.height);
//   }
// }

// let hurdle = new Jelly({ x: 750, y: 250, width: 100, height: 100 });
// let testJelly2 = new Jelly({ x: 1050, y: 450, width: 100, height: 100 });

// function drawMap() {
//   requestAnimationFrame(drawMap);
//   background.draw();
// }

// drawMap();
