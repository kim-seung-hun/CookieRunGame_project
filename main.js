//캔버스 변수 선언, 할당
let canvasMain = document.getElementById("main");
let ctxMain = canvasMain.getContext("2d");

//캔버스 크기
canvasMain.width = 2000;
canvasMain.height = 600;

//중력설정
const gravity = 0.01;

//플레이어 설정 speed 낮추면 플레이어 움직임 속도 up
let player = {
  x: 120,
  y: 410,
  width: 80,
  height: 90,
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
    //히트박스 설정
    ctxMain.fillStyle = "green";
    ctxMain.fillRect(this.x, this.y, this.width, this.height);
    //포인트박스 설정
    ctxMain.fillStyle = "yellow";
    ctxMain.fillRect(this.x + 17, this.y + 20, 50, 50);
    //조건 ? 맞는거 : 틀린거
    ctxMain.drawImage(
      this.state == "run"
        ? runPlayer[this.index]
        : this.state == "slide"
        ? slidePlayer[this.index]
        : this.state == "jump"
        ? jumpPlayer[this.index]
        : this.state == "dbjumpstart"
        ? dbjumpstartPlayer[this.index]
        : this.state == "dbjump"
        ? dbjumpPlayer[this.index]
        : this.state == "dbjumplast"
        ? dbjumplastPlayer[this.index]
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
    if (this.y + this.height <= canvasMain.height) {
      this.yspeed += gravity;
    } else this.yspeed = 0;
  },
};

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
//더블점프 이미지
//더블점프 스타트
let dbjumpstartPlayer = new Array();
let imglinkDbjumpstart = [
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
];
for (let i = 0; i < 4; i++) {
  dbjumpstartPlayer.push(new Image());
  dbjumpstartPlayer[i].src = imglinkDbjumpstart[i];
}
let dbjumpPlayer = new Array();
let imglinkDbjump = [
  "images/Character/Taehoon/Jump/Dbjump1.png",
  "images/Character/Taehoon/Jump/Dbjump2.png",
  "images/Character/Taehoon/Jump/Dbjump3.png",
  "images/Character/Taehoon/Jump/Dbjump4.png",
];
for (let i = 0; i < 4; i++) {
  dbjumpPlayer.push(new Image());
  dbjumpPlayer[i].src = imglinkDbjump[i];
}
let dbjumplastPlayer = new Array();
let imglinkDbjumplast = [
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
];
for (let i = 0; i < 4; i++) {
  dbjumplastPlayer.push(new Image());
  dbjumplastPlayer[i].src = imglinkDbjumplast[i];
}

//피격시 이미지

//점프기능
function jumpSkill() {
  //점프시 점프값 증가 & 이미지 변경
  if (jump == true) {
    player.y -= 2;
    jumpTimer++;
  }
  //점프시간이 100 넘어가면 상승 끝
  if (jumpTimer > 100 && player.state == "jump") {
    player.y -= 0;
  }
  //더블점프
  if (dbjump == true) {
    player.y -= 1.7;
    jumpTimer++;
  }
  if (player.state == "dbjumpstart" && jumpTimer > 50) {
    player.state = "dbjump";
  }
  if (player.state == "dbjump" && jumpTimer > 300) {
    player.state = "dbjumplast";
  }
  //더블 점프 & 점프타이머 100 넘어가면 상승 끝
  if (player.state == "dbjump" && jumpTimer > 300) {
    player.y -= 0;
  }
}

//점수선언
let point = 0;
let pointImg = new Image();
pointImg.src = "images/Map/point.png";

//폰트적용 점수
let font = new FontFace("pointFont", "url(images/Font/a공주를부탁해.ttf)");
font.load().then(function () {
  console.log("");
  ctxMain.font = "25px pointFont";
});

//점수표
let drawScore = {
  draw() {
    ctxMain.fillStyle = "black";
    ctxMain.fillText(point, 450, 120, 300);
    ctxMain.drawImage(pointImg, 410, 97, 30, 30);
  },
};

//전역변수(frame=프레임, jumpTimer = 점프시간)
let frame = 0;
let jumpTimer = 0;
let jump = false;
let dbjump = false;

//키 코드 확인3
// addEventListener("keydown", function () {
//   console.log(this.event);
// });

let isSliding = false;

//키 이벤트
document.addEventListener("keydown", function (key) {
  if (player.state == "run") {
    switch (key.code) {
      case "Space":
        if (isSliding == true) {
          isSliding = false;
          player.state = "run";
          player.height = 90;
          player.width = 80;
          player.state = "jump";
        }
        player.y = player.y + 0.5;
        player.state = "jump";
        jump = true;
        break;
    }
  }
  if (player.state == "jump" && jumpTimer > 1) {
    switch (key.code) {
      case "Space":
        jumpTimer = 0;
        player.state = "dbjumpstart";
        dbjump = true;
        break;
    }
  }

  switch (key.code) {
    case "KeyA":
      player.x -= 10;
      break;

    case "KeyD":
      player.x += 10;
      break;

    case "ArrowDown":
      if (
        player.state == "jump" ||
        jump == "true" ||
        player.state == "dbjumpstart" ||
        player.state == "dbjump" ||
        player.state == "dbjumplast"
      ) {
        return;
      } else if (player.state == "run") {
        player.state = "slide";
        player.height = 55;
        player.width = 95;

        if (!isSliding) {
          player.y = player.y + 35;
          isSliding = true;
        }
        break;
      }
  }
});

document.addEventListener("keyup", function (key) {
  switch (key.code) {
    case "ArrowDown":
      if (player.state == "slide") {
        player.state = "run";
        isSliding = false;
        player.height = 90;
        player.width = 80;
        player.y = player.y - 35;

        break;
      }
  }
});

//게임실행
function game() {
  frame++;
  requestAnimationFrame(game);

  //전체 영역 클리어
  ctxMain.clearRect(0, 0, canvasMain.width, canvasMain.height);
  ctxBackground.clearRect(0, 0, canvasBackground.width, canvasBackground.width);

  //땅, 장애물 올라타기

  for (let i = 0; i < floor.length; i++) {
    if (
      player.y + player.height <= floor[i].y &&
      player.y + player.height + player.yspeed >= floor[i].y &&
      player.x + player.width >= floor[i].x &&
      player.x <= floor[i].x + floor[i].width
    ) {
      player.yspeed = 0;
      jumpTimer = 0;
      jump = false;
      dbjump = false;
      if (player.state != "slide") {
        player.state = "run";
      }
    }
  }

  jumpSkill();

  //맵그리기, 캐릭터 그리기, 점수 그리기, 젤리 그리기
  background.draw();

  if (testJelly1.getEater() == false) {
    jellyEat(player, testJelly1);
  }
  if (testJelly2.getEater() == false) {
    jellyEat(player, testJelly2);
  }

  floor.forEach((floor) => {
    floor.draw();
  });
  drawScore.draw();
  player.update();
}

//실행
game();
