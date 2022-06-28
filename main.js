let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

//중력설정
const gravity = 0.05;

//플레이어 이미지 프레임변경
let runPlayer = new Array();
let imglink = [
  "images/Character/Taehoon/Run/Run1.png",
  "images/Character/Taehoon/Run/Run2.png",
  "images/Character/Taehoon/Run/Run3.png",
  "images/Character/Taehoon/Run/Run4.png",
];
for (let i = 0; i < 4; i++) {
  runPlayer.push(new Image());
  runPlayer[i].src = imglink[i];
}

//플레이어 설정
let player = {
  x: 10,
  y: 300,
  width: 96,
  height: 108,
  yspeed: 1,
  index: 0,
  speed: 30,
  time: 0,
  draw() {
    this.time++;
    if (this.time % this.speed === 0) {
      if (this.index < 4) {
        this.index++;
      } else {
        this.index = 0;
      }
    }
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      runPlayer[this.index],
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
  update() {
    this.draw();
    this.y += this.yspeed;

    if (this.y + this.height + this.yspeed <= canvas.height) {
      this.yspeed += gravity;
    } else this.yspeed = 0;
  },
};

//플레이어 기본 이미지
let imgPlayer = new Image();
imgPlayer.src = "images/Character/Taehoon/Run/Run1.png";
// console.log(imgPlayer);

//장애물 기본 이미지
let imgSesame = new Image();
imgSesame.src = "images/깻잎.png";

//장애물 클래스
let hurdle = {
  x: 50,
  y: 350,
  width: 250,
  height: 50,
  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(imgSesame, this.x, this.y, this.width, this.height);
  },
};

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

  //장애물을 배열에 놓고 배출
  // if (timer % 270 === 0) {
  //   let hurdle = new Hurdle();
  //   hurdleUnit.push(hurdle);
  // }

  // hurdleUnit.forEach((a, i, o) => {
  //   if (a.x < 0) {
  //     o.splice(i, 1);
  //   }
  //   a.x--;
  //   collision(player, a);
  //   a.draw();
  // });

  if (
    player.y + player.height <= hurdle.y &&
    player.y + player.height + player.yspeed >= hurdle.y &&
    player.x + player.width >= hurdle.x &&
    player.x <= hurdle.x + hurdle.width
  ) {
    player.yspeed = 0;
  }

  //점프기능
  //점프시 점프값 증가 & 이미지 변경
  if (jump == true) {
    player.y -= 7;
    jumpTimer++;
    imgPlayer.src = "images/Character/Taehoon/Run/Run3.png";
  }
  //점프 상태 아닐시 y값 증가로 제자리로 돌아감
  if (jump == false) {
    if (player.y < 200) {
      player.y++;
    }
  }
  //점프값이 50 넘어가면 점프 끝
  if (jumpTimer > 50) {
    jump = false;
    jumpTimer = 0;
  }
  //점프 끝난 후 다시 원래 이미지로
  if (player.y == 200) {
    imgPlayer.src = "images/Character/Taehoon/Run/Run1.png";
  }

  //캐릭터 그리기, 점수 그리기
  player.update();
  // drawScore.draw();
  hurdle.draw();
}

//실행
game();

//충돌확인
function collision(player, hurdle) {
  let xMinus = hurdle.x - (player.x + player.width);
  let yMinus = hurdle.y - (player.y + player.height);
  if (xMinus < 0 && yMinus < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

//키 코드 확인
// addEventListener("keydown", function () {
//   console.log(this.event);
// });

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
  }
});
