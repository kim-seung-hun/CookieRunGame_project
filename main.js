let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

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
  //console.log(runCharacter[i]);
}

console.log(runCharacter);
let cat = {
  x: 10,
  y: 200,
  width: 96,
  height: 108,
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
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      runCharacter[this.index],
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
};

let imgCat = new Image();
imgCat.src = "images/고양이.png";
console.log(imgCat);

let imgSesame = new Image();
imgSesame.src = "images/깻잎.png";

class Hurdle {
  constructor() {
    this.x = 700;
    this.y = 200;
    this.width = 70;
    this.height = 70;
  }
  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(imgSesame, this.x, this.y, this.width, this.height);
  }
}

let drawScore = {
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  draw() {
    ctx.font = "15px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("점수: " + timer, 30, 30);
  },
};

let timer = 0;
let hurdleUnit = [];
let jumpTimer = 0;
let jump = false;
let animation;

//점프
function move() {
  animation = requestAnimationFrame(move);
  timer++;

  //장애물 삭제
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 270 === 0) {
    let hurdle = new Hurdle();
    hurdleUnit.push(hurdle);
  }

  hurdleUnit.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
    collision(cat, a);
    a.draw();
  });

  //점프기능
  if (jump == true) {
    cat.y -= 3;
    jumpTimer++;
    imgCat.src = "images/깻잎.png";
  }
  if (jump == false) {
    if (cat.y < 200) {
      cat.y++;
    }
  }
  if (jumpTimer > 50) {
    jump = false;
    jumpTimer = 0;
  }

  if (cat.y == 200) {
    imgCat.src = "images/고양이.png";
  }

  //고양이 그리기, 점수 그리기
  cat.draw();
  drawScore.draw();
}

//실행
move();

//충돌확인
function collision(cat, hurdle) {
  let xMinus = hurdle.x - (cat.x + cat.width);
  let yMinus = hurdle.y - (cat.y + cat.height);
  if (xMinus < 0 && yMinus < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

//스페이스바 입력시 점프
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && cat.y == 200) {
    jump = true;
  }
});
