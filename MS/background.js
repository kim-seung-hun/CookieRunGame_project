let canvasBackground = document.getElementById("background");
let ctxBackground = canvasBackground.getContext("2d");

// stage 전환시 black 배경
let canvasBackgroundBlack = document.createElement("canvas");
canvasBackgroundBlack.classList.add("bgBlack");
canvasBackgroundBlack.style.backgroundColor = "black";
canvasBackgroundBlack.width = 2000;
canvasBackgroundBlack.height = 600;
document.getElementById("canvasBox").appendChild(canvasBackgroundBlack);

let ctxcanvasBackgroundBlack = canvasBackgroundBlack.getContext("2d");

canvasBackground.width = 2000;
canvasBackground.height = 600;

let backgroundImg1 = new Image();
backgroundImg1.src = "images/Map/first.png";
let backgroundImg2 = new Image();
backgroundImg2.src = "images/Map/second.png";

//배경 객체선언 및 할당
let background = {
  x: 0,
  y: 0,
  width: 2000,
  height: 600,
  time: 0,
  a: 1,
  stage: 1,

  draw() {
    this.time++;
    this.x -= 0.1;

    if (this.time > 3600 && this.time < 3914) {
      this.a -= 0.00318;
    } else if (this.time >= 3914) {
      this.a += 0.00318;
    }

    if (this.time <= 3914) {
      this.stage = 1;
    } else if (this.time > 3914 && this.time <= 7830) {
      this.stage = 2;
    }
    ctxBackground.globalAlpha = this.a;
    ctxBackground.fillStyle = "black";
    ctxBackground.fillRect(this.x, this.y, this.width, this.height);
    ctxBackground.drawImage(
      this.stage == 1
        ? backgroundImg1
        : this.stage == 2
        ? backgroundImg2
        : null,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
};
