let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;

let runCharacter = new Array();
let imglink = [
  "images/Run/Run1.png",
  "images/Run/Run2.png",
  "images/Run/Run3.png",
  "images/Run/Run4.png",
];
for (let i = 0; i < 4; i++) {
  runCharacter.push(new Image());
  runCharacter[i].src = imglink[i];
}

let character = {
  x: 10,
  y: 200,
  width: 96,
  height: 108,
  yspeed: 1,
  index: 0,
  speed: 30,
  time: 0,
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
      runCharacter[this.index],
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
  update() {
    this.y += this.yspeed;
  },
};

let imgCharacter = new Image();
imgCharacter.src = "images/Run/Run1.png";
// console.log(imgCharacter);

let imgSesame = new Image();
imgSesame.src = "images/깻잎.png";

class Hurdle {
  constructor() {
    this.x = 700;
    this.y = 250;
    this.width = 70;
    this.height = 70;
  }
  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(imgSesame, this.x, this.y, this.width, this.height);
  }
}

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

let timer = 0;
let hurdleUnit = [];
let jumpTimer = 0;
let jump = false;
let animation;

//게임실행
function game() {
  animation = requestAnimationFrame(game);
  timer++;

  //장애물 삭제
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // if (timer % 270 === 0) {
  //   let hurdle = new Hurdle();
  //   hurdleUnit.push(hurdle);
  // }

  // hurdleUnit.forEach((a, i, o) => {
  //   if (a.x < 0) {
  //     o.splice(i, 1);
  //   }
  //   a.x--;
  //   collision(character, a);
  //   a.draw();
  // });

  //점프기능
  if (jump == true) {
    character.y -= 3;
    jumpTimer++;
    imgCharacter.src = "images/Run/Run3.png";
  }
  if (jump == false) {
    if (character.y < 200) {
      character.y++;
    }
  }
  if (jumpTimer > 50) {
    jump = false;
    jumpTimer = 0;
  }

  if (character.y == 200) {
    imgCharacter.src = "images/Run/Run1.png";
  }

  //캐릭터 그리기, 점수 그리기
  character.update();
  // drawScore.draw();
}

//실행
game();

//충돌확인
function collision(character, hurdle) {
  let xMinus = hurdle.x - (character.x + character.width);
  let yMinus = hurdle.y - (character.y + character.height);
  if (xMinus < 0 && yMinus < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

//스페이스바 입력시 점프
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && character.y == 200) {
    jump = true;
  }
});
