let abc = true;
//캔버스 변수 선언, 할당
let canvasMain = document.getElementById("main");
let ctxMain = canvasMain.getContext("2d");

//캔버스 크기
canvasMain.width = 2000;
canvasMain.height = 600;

//중력설정
let gravity = 0.009;

//플레이어 설정 speed 낮추면 플레이어 움직임 속도 up
let player = {
  x: 120,
  y: 400,
  width: 80,
  height: 90,
  yspeed: 0,
  index: 0,
  speed: 3,
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
    ctxMain.drawImage(
      this.state == "run"
        ? runPlayer[this.index]
        : this.state == "slide"
        ? slidePlayer[this.index]
        : this.state == "jumpstart"
        ? jumpPlayer[this.index]
        : this.state == "jump"
        ? jumpPlayer[this.index]
        : this.state == "dbjumpstart"
        ? dbjumpstartPlayer[this.index]
        : this.state == "dbjump"
        ? dbjumpPlayer[this.index]
        : this.state == "dbjumplast"
        ? dbjumplastPlayer[this.index]
        : this.state == "falling"
        ? fallingPlayer[this.index]
        : this.state == "coll"
        ? collPlayer[this.index]
        : this.state == "end"
        ? runPlayer[this.index]
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

    //땅에 붙으면 하락값 0
    for (let i = 0; i < floor.length; i++)
      if (
        this.y + this.height > canvasMain.height + 100 &&
        player.state == "run"
      ) {
        player.y = player.y - 0.1;
        player.state = "jump";
        jump = true;
        floatPlayer = true;
        jumpTimer = 0;
        falling = true;
        player.state = "falling";
        this.yspeed = -7;
      } else if (this.y + this.height > canvasMain.height + 100) {
        jumpTimer = 0;
        falling = true;
        player.state = "falling";
        this.yspeed = -7;
      } else {
        this.yspeed += gravity;
        falling = false;
      }
    hi();
    if (player.state == "end") {
      player.state = "end";
    }
  },
};
function hi() {
  if (player.y < 230 && player.state == "falling" && abc == true) {
    abc = false;
    let fallingfin = setInterval(() => {
      abc = false;
      gravity = 0;
      player.y = 230;
      hpRemove();
    }, 10);
    setTimeout(() => {
      player.state = "dbjumplast";
      clearInterval(fallingfin);
      yspeed = 0;
      gravity = 0.009;
      abc = true;
    }, 700);
  }
}

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
let fallingPlayer = new Array();
let imglinkfallingPlayer = [
  "images/Character/Taehoon/Fall/Fall1.png",
  "images/Character/Taehoon/Fall/Fall2.png",
  "images/Character/Taehoon/Fall/Fall1.png",
  "images/Character/Taehoon/Fall/Fall2.png",
];
for (let i = 0; i < 4; i++) {
  fallingPlayer.push(new Image());
  fallingPlayer[i].src = imglinkfallingPlayer[i];
}

//피격시 이미지
let collPlayer = new Array();
let imglinkcollPlayer = [
  "images/Character/Taehoon/Collision/Collision1.png",
  "images/Character/Taehoon/Collision/Collision2.png",
  "images/Character/Taehoon/Collision/Collision1.png",
  "images/Character/Taehoon/Collision/Collision2.png",
];
for (let i = 0; i < 4; i++) {
  collPlayer.push(new Image());
  collPlayer[i].src = imglinkcollPlayer[i];
}

//점프기능
function jumpSkill() {
  //점프시 점프값 증가 & 이미지 변경
  if (player.state == "jumpstart" && jumpTimer > 30) {
    player.state = "jump";
  }

  if (jump == true) {
    player.y -= 7.57;
    jumpTimer++;
  }

  //더블점프
  if (dbjump == true) {
    player.y -= 0.45;
    jumpTimer++;
  }

  if (falling == true) {
    player.y -= 7.57;
    jumpTimer++;
  }

  //더블 점프 이미지 변경
  if (player.state == "dbjumpstart" && jumpTimer > 30) {
    player.state = "dbjump";
  }
  if (player.state == "dbjump" && jumpTimer > 110) {
    player.state = "dbjumplast";
  }
  //더블 점프 & 점프타이머 100 넘어가면 상승 끝
  if (player.state == "dbjump" && jumpTimer > 10) {
    player.y -= 0;
  }
  if (player.state == "falling" && jumpTimer > 100) {
    let fallingcome = setInterval(() => {
      player.y -= 0;
    }, 1);
    setTimeout(() => {
      clearInterval(fallingcome);
    }, 3000);
  }
}

//허들 충돌 및 피격
function TopHurdle() {
  //앉는 허들
  for (let i = 0; i < hurdle.length; i++) {
    col_left_X = hurdle[i].x - player.x;
    col_right_X = hurdle[i].x + hurdle[i].width - (player.x + player.width);
    if (
      col_left_X < 85 &&
      col_left_X > -100 &&
      (col_right_X < 100) & (col_right_X > -30) &&
      player.state != "slide" &&
      a == true
    ) {
      col_temp--;
      console.log(col_temp);
      console.log("충돌");
      player.state = "coll";
      a = false;
      hpRemove();
      let hi = setInterval(() => {
        a = false;
        player.state = "coll";
      }, 1);
      setTimeout(() => {
        clearInterval(hi);
        player.state = "run";
        a = true;
      }, 700);
    }
  }
}

function LowHurdle() {
  //Low 허들
  for (let i = 0; i < lowhurdle.length; i++) {
    col_left_X = lowhurdle[i].x - player.x;
    col_right_X =
      lowhurdle[i].x + lowhurdle[i].width - (player.x + player.width);
    col_top_Y = lowhurdle[i].y - player.y;
    col_bottom_Y =
      lowhurdle[i].y + lowhurdle[i].height - (player.y + player.height);
    if (
      col_left_X > -50 &&
      col_left_X < 50 &&
      col_right_X < 50 &&
      col_right_X > -50 &&
      col_top_Y < 55 &&
      col_top_Y > -55 &&
      col_bottom_Y > -55 &&
      col_bottom_Y < 55 &&
      a == true
    ) {
      col_temp--;
      console.log(col_temp);
      console.log("충돌");
      player.state = "coll";
      a = false;
      hpRemove();
      let hi = setInterval(() => {
        a = false;
        player.state = "coll";
      }, 1);
      setTimeout(() => {
        clearInterval(hi);
        a = true;
        player.state = "run";
      }, 700);
    }
  }
}

function MiddleHurdle() {
  //high 허들
  for (let i = 0; i < highhurdle.length; i++) {
    col_left_X = highhurdle[i].x - player.x;
    col_right_X =
      highhurdle[i].x + highhurdle[i].width - (player.x + player.width);
    col_top_Y = highhurdle[i].y - player.y;
    col_bottom_Y =
      highhurdle[i].y + highhurdle[i].height - (player.y + player.height);

    if (
      col_left_X > -70 &&
      col_left_X < 70 &&
      col_right_X > -70 &&
      col_right_X < 70 &&
      col_top_Y < 90 &&
      col_top_Y > -90 &&
      col_bottom_Y > -90 &&
      col_bottom_Y < 90 &&
      a == true
    ) {
      col_temp--;
      console.log(col_temp);
      console.log("충돌");
      player.state = "coll";
      a = false;
      hpRemove();
      let hi = setInterval(() => {
        a = false;
        player.state = "coll";
      }, 1);
      setTimeout(() => {
        clearInterval(hi);
        a = true;
        player.state = "run";
      }, 700);
    }
  }
}

//전역변수(frame=프레임, jumpTimer = 점프시간)
let frame = 0;
let jumpTimer = 0;
let jump = false;
let dbjump = false;
let falling = false;
let isSliding = false;
let floatPlayer = false;

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
          player.state = "jumpstart";
        }
        player.y = player.y - 0.1;
        player.state = "jumpstart";
        jump = true;
        floatPlayer = true;
        break;
    }
  }
  if (
    (player.state == "jumpstart" || player.state == "jump") &&
    jumpTimer > 10
  ) {
    switch (key.code) {
      case "Space":
        jumpTimer = 0;
        player.yspeed = 0;
        player.state = "dbjumpstart";
        dbjump = true;
        break;
    }
  }

  switch (key.code) {
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

let a = true;
let b = 0;
let col_temp = 100;
//게임실행
function game() {
  //멈춤 버튼 클릭시 애니메이션 멈춤 & hp 모두 소모시 정지 & 클리어젤리 먹을시
  if (HpDecrease.x <= 34 || !continueAnimating || player.state == "end") {
    cancelAnimationFrame(game);
    cancelAnimationFrame(game);
    cancelAnimationFrame(game);
    cancelAnimationFrame(game);
    cancelAnimationFrame(game);
  } else {
    requestAnimationFrame(game);
  }

  frame++;

  //전체 영역 클리어
  ctxMain.clearRect(0, 0, canvasMain.width, canvasMain.height);
  ctxBackground.clearRect(0, 0, canvasBackground.width, canvasBackground.width);

  //땅 올라타기
  //밑에 땅
  for (let i = 0; i < floor.length; i++) {
    if (
      player.y + player.height >= floor[i].y &&
      player.x + player.width - 10 >= floor[i].x &&
      player.x + 30 <= floor[i].x + floor[i].width &&
      player.state != "falling"
    ) {
      player.yspeed = 0;
      floatPlayer = false;
      jumpTimer = 0;
      jump = false;
      dbjump = false;
      if (player.state == "coll") {
        player.state = "coll";
      } else if (player.state != "slide") {
        player.state = "run";
        player.y = 420;
      }
    }
  }
  //위에 땅
  for (let i = 0; i < floatFloor.length; i++) {
    if (
      player.y + 50 <= floatFloor[i].y &&
      player.state != "dbjumpstart" &&
      player.state != "jumpstart" &&
      player.state != "falling"
    ) {
      if (
        player.y + player.height >= floatFloor[i].y &&
        player.x + player.width - 10 >= floatFloor[i].x &&
        player.x + 30 <= floatFloor[i].x + floatFloor[i].width
      ) {
        player.y = floatFloor[i].y - player.height;
        player.yspeed = 0;
        jumpTimer = 0;
        jump = false;
        dbjump = false;
        if (player.state == "coll") {
          player.state = "coll";
        } else if (player.state != "slide") {
          player.state = "run";
        }
      }
    }
  }

  jellyEat();
  jumpSkill();

  //맵그리기, 땅그리기, 점수 그리기, 젤리 그리기, 캐릭터 그리기
  background.draw();
  floor.forEach((floor) => {
    floor.draw();
  });
  floatFloor.forEach((floor) => {
    floor.draw();
  });
  hurdle.forEach((hurdle) => {
    hurdle.draw();
  });
  lowhurdle.forEach((lowhurdle) => {
    lowhurdle.draw();
  });
  highhurdle.forEach((highhurdle) => {
    highhurdle.draw();
  });
  player.update();

  //hp.js함수 실행
  breadDraw();
  jamDraw();
  HpDecrease.draw();
  HpLight.draw();
  TopHurdle();
  LowHurdle();
  MiddleHurdle();

  if (floor[26].x < 0) {
    floor[26].x = 0;
  }
}

//실행
document.getElementById("gmes").onclick = function () {
  document.getElementById("intro").style.zIndex = "-100";
};

let test = function () {
  if (test !== null) {
    document.getElementById("tutorial").style.zIndex = "-99";
    game();
  }
  test = null;
};
document.getElementById("tutorial").onclick = test;
