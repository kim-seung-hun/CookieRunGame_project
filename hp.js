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
canvasJam.style.width = "431px";
canvasJam.style.height = "70px";
document.getElementById("canvasBox").appendChild(canvasJam);

let ctxJam = canvasJam.getContext("2d");

let jamImg = new Image();
jamImg.src = "images/HP/hp.png";
function jamDraw() {
  ctxJam.drawImage(jamImg, 35, 30, 233, 50);
}

// function imgData() {
//   let imageData = ctxJam.getImageData(35, 30, 233, 50);
//   let raster = imageData.data;

//   for (let i = 0; i < raster.length; i += 4) {
//     raster[i] = 60 + raster[i];
//     raster[i + 1] = 60 + raster[i + 1];
//     raster[i + 2] = 60 + raster[i + 2];
//   }

//   ctxJam.putImageData(imageData, 35, 30);
// }

class Clear {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.time = 0;
  }

  clearDraw() {
    this.time++;
    this.x -= 0.05;
    this.width += 1;
    if (this.x >= 30) {
      ctxJam.clearRect(this.x, this.y, this.width, this.height);
    } else if (this.x < 30) {
      ctxJam.clearRect(35, 30, 233, 50);
      this.x = 30;
    }
    // console.log(this.x);
  }
}

class Toggle {
  constructor({ res1, res2 }) {
    this.time = 0;
    this.res1 = res1;
    this.res2 = res2;
  }

  toggle() {
    let imageData = ctxJam.getImageData(35, 30, 233, 50);
    let raster = imageData.data;
    this.time++;
    this.res1 -= 1;

    // switch ((this.res1, this.res2)) {
    //   case "this.res1 > 0":
    //     for (let i = 0; i < raster.length; i += 4) {
    //       raster[i] = this.res1 + raster[i];
    //       raster[i + 1] = this.res1 + raster[i + 1];
    //       raster[i + 2] = this.res1 + raster[i + 2];
    //     }
    //     console.log(this.res1);
    //     ctxJam.putImageData(imageData, 35, 30);

    //   case "this.res1 <= 0":
    //     for (let i = 0; i < raster.length; i += 4) {
    //       raster[i] = this.res2 + raster[i];
    //       raster[i + 1] = this.res2 + raster[i + 1];
    //       raster[i + 2] = this.res2 + raster[i + 2];
    //     }
    //     console.log(this.res2);
    //     ctxJam.putImageData(imageData, 35, 30);

    //   default:
    //     return;
    // }

    if (this.res1 >= 0) {
      for (let i = 0; i < raster.length; i += 4) {
        raster[i] = this.res1 + raster[i];
        raster[i + 1] = this.res1 + raster[i + 1];
        raster[i + 2] = this.res1 + raster[i + 2];
      }
      console.log(this.res1);
      ctxJam.putImageData(imageData, 35, 30);
    }

    if (this.res1 < 0) {
      this.res2 += 1;
      for (let i = 0; i < raster.length; i += 4) {
        raster[i] = this.res2 + raster[i];
        raster[i + 1] = this.res2 + raster[i + 1];
        raster[i + 2] = this.res2 + raster[i + 2];
      }
      console.log(this.res2);
      ctxJam.putImageData(imageData, 35, 30);
    }
  }
}

let clear = new Clear({ x: 268, y: 30, width: 0, height: 50 });
let toggle = new Toggle({ res1: 60, res2: 0 });
