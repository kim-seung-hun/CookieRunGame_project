// import { canvasMap } from "./map.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 4000;
canvas.height = 600;

//중력설정
const gravity = 0.03;

//플레이어 이미지 프레임변경
let runPlayer = new Array();
let imglinkRun = [
  "images/Character/Taehoon/Run/Run1.png",
  "images/Character/Taehoon/Run/Run2.png",
  "images/Character/Taehoon/Run/Run3.png",
  "images/Character/Taehoon/Run/Run4.png",
];
for (let i = 0; i < 4; i++) {
  runPlayer.push(new Image());
  runPlayer[i].src = imglinkRun[i];
}

let slidePlayer = new Array();
let imglinkSlide = [
  "images/Character/Taehoon/Slide/Slide1.png",
  "images/Character/Taehoon/Slide/Slide2.png",
  "images/Character/Taehoon/Slide/Slide1.png",
  "images/Character/Taehoon/Slide/Slide2.png",
];
for (let i = 0; i < 4; i++) {
  slidePlayer.push(new Image());
  slidePlayer[i].src = imglinkSlide[i];
}

//플레이어 설정
let player = {
  x: 100,
  y: 392,
  width: 96,
  height: 108,
  yspeed: 1,
  index: 0,
  speed: 15,
  time: 0,
  state: "run",
  draw() {
    this.time++;
    if (this.time % this.speed === 0) {
      if (this.index < 3) {
        this.index++;
      } else {
        this.index = 0;
      }
    }
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.state == "run" ? runPlayer[this.index] : slidePlayer[this.index],
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
  update() {
    this.draw();
    this.y += this.yspeed;
    this.yspeed += gravity;

    //바닥에 캐릭터 닿으면 멈추기
    if (this.y + this.height + this.yspeed <= canvas.height - 100) {
      this.yspeed += gravity;
    } else this.yspeed = 0;
  },
};

//플레이어 기본 이미지
// let imgPlayer = new Image();
// console.log(imgPlayer);

//장애물 기본 이미지
let imgSesame = new Image();
imgSesame.src = "images/깻잎.png";

//장애물 클래스
class Hurdle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(imgSesame, this.x, this.y, this.width, this.height);
  }
}

const hurdle = [
  new Hurdle({ x: 750, y: 350, width: 150, height: 70 }),
  new Hurdle({ x: 950, y: 250, width: 150, height: 70 }),
];

//점수표
// let drawScore = {
//   x: 10,
//   y: 10,
//   width: 50,
//   height: 50,
//   draw() {
//     ctx.font = "15px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("점수: " + timer, 30, 30);
//   },
// };

//전역변수
let timer = 0;
let jumpTimer = 0;
let jump = false;
let animation;

//게임실행
function game() {
  animation = requestAnimationFrame(game);
  timer++;

  //전체 영역 클리어
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //장애물 배출
  if (timer % 2 === 0) {
    hurdle.forEach((a, i, o) => {
      if (a.x < 0) {
        o.splice(i, 1);
      }
      // collision(player, a);
      a.x -= 2;
      a.draw();
    });
  }
  // console.log(hurdle);

  //장애물 올라타기
  hurdle.forEach((Hurdle) => {
    if (
      player.y + player.height <= Hurdle.y &&
      player.y + player.height + player.yspeed >= Hurdle.y &&
      player.x + player.width >= Hurdle.x &&
      player.x <= Hurdle.x + Hurdle.width
    ) {
      player.yspeed = 0;
    }
  });

  //점프기능
  //점프시 점프값 증가 & 이미지 변경
  if (jump == true) {
    player.y -= 7;
    jumpTimer++;
  }

  //점프값이 50 넘어가면 점프 끝
  if (jumpTimer > 50) {
    jump = false;
    jumpTimer = 0;
  }
  //점프 끝난 후 다시 원래 이미지로
  if (player.y == 200) {
  }

  //캐릭터 그리기, 점수 그리기
  player.update();
  // drawScore.draw();
  hurdle.forEach((Hurdle) => {
    Hurdle.draw();
  });
}

//실행
game();

//충돌확인
// function collision(player, Hurdle) {
//   let xMinus = Hurdle.x - (player.x + player.width);
//   let yMinus = Hurdle.y - (player.y + player.height);
//   if (xMinus < 0 && yMinus < 0) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     cancelAnimationFrame(animation);
//   }
// }

//키 코드 확인
addEventListener("keydown", function () {
  console.log(this.event);
});

let isSliding = false;

document.addEventListener("keydown", function (key) {
  switch (key.code) {
    case "Space":
      jump = true;
      break;

    case "KeyA":
      player.x -= 10;
      break;

    case "KeyD":
      player.x += 10;
      break;

    case "ArrowDown":
      player.state = "slide";
      player.height = 65;

      console.log(player.y);

      if (!isSliding) {
        player.y = player.y + 43;
        isSliding = true;
      }
      break;
  }
});

document.addEventListener("keyup", function (key) {
  switch (key.code) {
    case "ArrowDown":
      player.state = "run";
      if (isSliding) {
        player.y = player.y - 43;
        isSliding = false;
      }
      player.height = 108;
      break;
  }
});
