// bread canvas 생성
let canvasHpBar = document.createElement("canvas");
canvasHpBar.classList.add("bread");
canvasHpBar.style.position = "absolute";
canvasHpBar.style.left = "27%";
canvasHpBar.style.top = "6px";
canvasHpBar.style.width = "430px";
canvasHpBar.style.height = "80px";
document.getElementById("canvasBox").appendChild(canvasHpBar);

let ctxHpBar = canvasHpBar.getContext("2d");

// bread image
let hpImg = new Image();
hpImg.src = "images/HP/bread.png";
function breadDraw() {
  ctxHpBar.drawImage(hpImg, 0, 0, 300, 100);
}

// jam canvas 생성
let canvasJam = document.createElement("canvas");
canvasJam.classList.add("jam");
canvasJam.style.position = "absolute";
canvasJam.style.left = "27%";
canvasJam.style.top = "10px";
canvasJam.style.width = "430px";
canvasJam.style.height = "70px";
document.getElementById("canvasBox").appendChild(canvasJam);

let ctxJam = canvasJam.getContext("2d");

// jam image
let jamImg = new Image();
jamImg.src = "images/HP/hp.png";
function jamDraw() {
  ctxJam.drawImage(jamImg, 35, 30, 233, 50);
}

// HP decrease
class HP {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.time = 0;
  }
  // game ~ing
  draw() {
    this.time++;
    this.x -= 0.05;
    this.width += 0.05;

    if (this.x >= 34) {
      ctxJam.clearRect(this.x, this.y, this.width, this.height);
    } else if (this.x < 34) {
      ctxJam.clearRect(35, 30, 233, 50);
      this.x = 34;
      this.width = 238;
      gameEnd();
    }
  }
}

// HP restore
function hpRestore() {
  let state = 10;
  let add = 0;
  let set = setInterval(() => {
    if (state <= add || HpDecrease.x > 267) {
      clearInterval(set);
    } else {
      HpDecrease.x += 0.3;
      HpDecrease.width -= 0.3;
      add += 0.1;
    }
  }, 1);
}

// HP remove
function hpRemove() {
  HpDecrease.x -= 30;
  HpDecrease.width += 30;

  for (let i = 0; i < 1000; i++) {
    setTimeout(() => (canvasJam.style.top = "7px"), 100);
    setTimeout(() => (canvasJam.style.top = "13px"), 100);
    setTimeout(() => (canvasJam.style.top = "7px"), 100);
    setTimeout(() => (canvasJam.style.top = "13px"), 100);
    setTimeout(() => (canvasJam.style.top = "7px"), 100);
    setTimeout(() => (canvasJam.style.top = "13px"), 100);
    setTimeout(() => (canvasJam.style.top = "7px"), 100);
    setTimeout(() => (canvasJam.style.top = "10px"), 100);
  }
}

function gameEnd() {
  document.getElementById("endGame").style.zIndex = "100";
}

// HP light
class Light {
  constructor({ res1, res2 }) {
    this.time = 0;
    this.res1 = res1;
    this.res2 = res2;
    this.selectres = this.res1;
    this.switch = false;
  }

  draw() {
    let imageData = ctxJam.getImageData(35, 30, 233, 50);
    let raster = imageData.data;
    this.time++;
    if (this.selectres == 0) {
      if (this.selectres < this.res1) {
        this.selectres += 1;
        for (let i = 0; i < raster.length; i += 4) {
          raster[i] = this.selectres + raster[i];
          raster[i + 1] = this.selectres + raster[i + 1];
          raster[i + 2] = this.selectres + raster[i + 2];
        }
        ctxJam.putImageData(imageData, 35, 30);
        if (this.selectres == 59) {
          if (this.switch == true) {
            this.selectres = this.res2;
            this.switch = false;
          } else {
            this.selectres = this.res1;
            this.switch = true;
          }
        }
      }
    } else {
      if (this.selectres > 0) {
        this.selectres -= 1;
        for (let i = 0; i < raster.length; i += 4) {
          raster[i] = this.selectres + raster[i];
          raster[i + 1] = this.selectres + raster[i + 1];
          raster[i + 2] = this.selectres + raster[i + 2];
        }
        ctxJam.putImageData(imageData, 35, 30);
        if (this.selectres == 0) {
          if (this.switch == true) {
            this.selectres = this.res2;
            this.switch = false;
          } else {
            this.selectres = this.res1;
            this.switch = true;
          }
        }
      }
    }
  }
}

let HpDecrease = new HP({ x: 268, y: 30, width: 0, height: 50 });
let HpLight = new Light({ res1: 60, res2: 0 });
