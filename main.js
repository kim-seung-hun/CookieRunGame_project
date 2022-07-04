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
  time: 0,
  a: 1,
  draw() {
    this.time++;
    this.x -= 0.05;
    if (this.time % 1000 == 0) {
      this.a -= 0.01;
    }
    ctxMap.globalAlpha = this.a;
    // ctxMap.fillStyle = "black";
    // ctxMap.fillRect(this.x, this.y, this.width, this.height);
    ctxMap.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
  },
};

//캔버스 변수 선언, 할당
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//캔버스 크기
canvas.width = 2000;
canvas.height = 600;

//중력설정
const gravity = 0.009;

//플레이어 이미지 프레임변경
//달리기 이미지
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
//슬라이드 이미지
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
//점프 이미지
let jumpPlayer = new Array();
let imglinkJump = [
  "images/Character/Taehoon/Jump/Jump1.png",
  "images/Character/Taehoon/Jump/Jump2.png",
  "images/Character/Taehoon/Jump/Jump1.png",
  "images/Character/Taehoon/Jump/Jump2.png",
];
for (let i = 0; i < 4; i++) {
  jumpPlayer.push(new Image());
  jumpPlayer[i].src = imglinkJump[i];
}

//플레이어 설정
let player = {
  x: 120,
  y: 423,
  width: 80,
  height: 90,
  yspeed: 0.1,
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
    //히트박스 설정
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //포인트박스 설정
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x + 17, this.y + 20, 50, 50);
    //조건 ? 맞는거 : 틀린거
    ctx.drawImage(
      this.state == "run"
        ? runPlayer[this.index]
        : this.state == "slide"
        ? slidePlayer[this.index]
        : this.state == "jump"
        ? jumpPlayer[this.index]
        : null,
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
    if (this.y + this.height + this.yspeed <= canvas.height - 87) {
      this.yspeed += gravity;
    } else this.yspeed = 0;
  },
};

//젤리 기본 이미지
let imgJelly = new Image();
imgJelly.src = "images/Jelly/왕젤리1.png";

//젤리 클래스
class Jelly {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eat = false;
    this.speed = 3;
    this.time = 0;
  }
  setEater() {
    this.eat = true;
  }
  getEater() {
    return this.eat;
  }
  draw() {
    this.time++;
    if (this.time % this.speed === 0) {
      this.x--;
    }
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.globalAlpha = 1;
    ctx.drawImage(imgJelly, this.x, this.y, this.width, this.height);
  }
}

let testJelly1 = new Jelly({ x: 750, y: 250, width: 100, height: 100 });
let testJelly2 = new Jelly({ x: 1050, y: 350, width: 100, height: 100 });

class Floor {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

//점수선언
let point = 0;

//점수표
let drawScore = {
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  draw() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("점수: " + point, 30, 30);
  },
};

//전역변수
let timer = 0;
let jumpTimer = 0;
let jump = false;
let animation;

//게임실행
function game() {
  requestAnimationFrame(game);
  timer++;

  //전체 영역 클리어
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxMap.clearRect(0, 0, canvasMap.width, canvasMap.width);

  //장애물 올라타기
  // hurdle.forEach((Hurdle) => {
  //   if (
  //     player.y + player.height <= Hurdle.y &&
  //     player.y + player.height + player.yspeed >= Hurdle.y &&
  //     player.x + player.width >= Hurdle.x &&
  //     player.x <= Hurdle.x + Hurdle.width
  //   ) {
  //     player.yspeed = 0;
  //   }
  // });

  //점프기능
  //점프시 점프값 증가 & 이미지 변경
  if (jump == true) {
    player.y -= 3.5;
    jumpTimer++;
  }

  //점프시간이 50 넘어가면 점프 끝
  if (jumpTimer > 35) {
    jump = false;
    jumpTimer = 0;
  }
  //점프 끝난 후 다시 원래 이미지로
  if (
    player.y + player.height + player.yspeed + 0.01 >= canvas.height - 87 &&
    player.state == "jump"
  ) {
    player.state = "run";
  }

  //맵그리기, 캐릭터 그리기, 점수 그리기, 젤리 그리기
  background.draw();
  // testJelly1.draw();
  // testJelly2.draw();
  if (testJelly1.getEater() == false) {
    jellyEat(player, testJelly1);
  }
  if (testJelly2.getEater() == false) {
    jellyEat(player, testJelly2);
  }
  // jellyEat(player, testJelly1);
  // jellyEat(player, testJelly2);
  player.update();

  // jelly.forEach((Jelly, i, jellyArray) => {
  //   if (Jelly.x < 0) {
  //     jellyArray.splice(i, 1);
  //   }
  //   Jelly.x -= 0.3;
  //   Jelly.draw();
  // });
  drawScore.draw();
}

//실행
game();

//젤리먹기 충돌체크
function jellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyY = _jelly.y - player.y;
  if (eatJellyX < 70 && eatJellyX > -70 && eatJellyY < 80 && eatJellyY > -80) {
    _jelly.setEater();
    ctx.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    // firstMap.draw();
    point += 10000;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

//키 코드 확인
// addEventListener("keydown", function () {
//   console.log(this.event);
// });

let isSliding = false;

document.addEventListener("keydown", function (key) {
  switch (key.code) {
    case "Space":
      player.state = "jump";
      jump = true;
      if (isSliding) {
        isSliding = false;
        player.state = "jump";
        player.height = 90;
      }
      break;

    case "KeyA":
      player.x -= 10;
      break;

    case "KeyD":
      player.x += 10;
      break;

    case "ArrowDown":
      player.state = "slide";
      player.height = 55;

      if (!isSliding) {
        player.y = player.y + 45;
        isSliding = true;
      }
      break;
  }
});

document.addEventListener("keyup", function (key) {
  switch (key.code) {
    case "ArrowDown":
      player.state = "run";
      if (isSliding && jump == true) {
        isSliding = false;
        player.height = 90;
      } else if (isSliding && player.state == "run") {
        player.y = player.y - 45;
        isSliding = false;
        player.height = 90;
      } else if (!isSliding && player.state == "run") {
        isSliding = false;
        player.height = 90;
      }

      break;
  }
});
