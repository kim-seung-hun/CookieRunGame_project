//장애물 기본 이미지
let skyHurdleImg = new Image();
skyHurdleImg.src = "images/Hurdle/hurdle1-1.png";

let floorlowHurdleImg = new Image();
floorlowHurdleImg.src = "images/Hurdle/hurdle1-2.png";

let floorhighHurdleImg = new Image();
floorhighHurdleImg.src = "images/Hurdle/hurdle1-3.png";

let skyHurdleImg2 = new Image();
skyHurdleImg2.src = "images/Hurdle/hurdle2-1.png";

let floorlowHurdleImg2 = new Image();
floorlowHurdleImg2.src = "images/Hurdle/hurdle2-2.png";

let floorhighHurdleImg2 = new Image();
floorhighHurdleImg2.src = "images/Hurdle/hurdle2-3.png";

//캐릭터 충돌 상태 추가

//장애물 클래스
class Hurdle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.time = 0;
  }
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(skyHurdleImg, this.x, this.y, this.width, this.height);
  }
}

class lowHurdle extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorlowHurdleImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
class highHurdle extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorhighHurdleImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Hurdle2 extends Hurdle {
  draw() {
    ctxMain.drawImage(skyHurdleImg2, this.x, this.y, this.width, this.height);
  }
}

class lowHurdle2 extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorlowHurdleImg2,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
class highHurdle2 extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorhighHurdleImg2,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

let hurdle = [
  new Hurdle({ x: 3850, y: 15, width: 100, height: 430 }),
  new Hurdle({ x: 3970, y: 15, width: 100, height: 430 }),
  new Hurdle({ x: 4090, y: 15, width: 100, height: 430 }),

  new Hurdle({ x: 5220, y: 15, width: 100, height: 430 }),
  new Hurdle({ x: 5340, y: 15, width: 100, height: 430 }),

  new Hurdle2({ x: 11250, y: 15, width: 100, height: 430 }),

  new Hurdle2({ x: 11250, y: 15, width: 100, height: 430 }),

  new Hurdle2({ x: 11670, y: 15, width: 100, height: 430 }),
  new Hurdle2({ x: 11850, y: 15, width: 100, height: 430 }),

  new Hurdle2({ x: 17170, y: 15, width: 100, height: 430 }),

  new Hurdle2({ x: 18700, y: 15, width: 100, height: 430 }),
  new Hurdle2({ x: 18800, y: 15, width: 100, height: 430 }),
];

let lowhurdle = [
  new lowHurdle({ x: 4350, y: 455, width: 45, height: 55 }),

  new lowHurdle({ x: 6050, y: 455, width: 45, height: 55 }),

  new lowHurdle({ x: 7140, y: 135, width: 45, height: 55 }),

  new lowHurdle({ x: 8000, y: 455, width: 45, height: 55 }),

  new lowHurdle({ x: 8900, y: 335, width: 45, height: 55 }),

  new lowHurdle({ x: 9000, y: 245, width: 45, height: 55 }),

  new lowHurdle({ x: 9200, y: 155, width: 45, height: 55 }),

  new lowHurdle({ x: 9400, y: 155, width: 45, height: 55 }),

  new lowHurdle2({ x: 10100, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 10300, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 13700, y: 195, width: 45, height: 55 }),
  new lowHurdle2({ x: 14270, y: 415, width: 45, height: 55 }),
  new lowHurdle2({ x: 14800, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 15410, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 15570, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 16770, y: 455, width: 45, height: 55 }),
  new lowHurdle2({ x: 16970, y: 455, width: 45, height: 55 }),
];

let highhurdle = [
  new highHurdle({ x: 4550, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 4950, y: 240, width: 70, height: 150 }),

  new highHurdle({ x: 5630, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 7000, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 7250, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 7730, y: 140, width: 70, height: 150 }),

  new highHurdle({ x: 8200, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 9500, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 9750, y: 360, width: 70, height: 150 }),

  new highHurdle2({ x: 10700, y: 360, width: 80, height: 150 }),
  new highHurdle2({ x: 10700, y: 360, width: 80, height: 150 }),
  new highHurdle2({ x: 13200, y: 360, width: 80, height: 150 }),
  new highHurdle2({ x: 13800, y: 360, width: 80, height: 150 }),
  new highHurdle2({ x: 16020, y: 380, width: 80, height: 150 }),
  new highHurdle2({ x: 16060, y: 100, width: 80, height: 150 }),
  new highHurdle2({ x: 16300, y: 100, width: 80, height: 150 }),
  new highHurdle2({ x: 16550, y: 100, width: 80, height: 150 }),
];
