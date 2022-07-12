let floor10Img = new Image();
floor10Img.src = "images/Hurdle/floor10.png";

let floor5Img = new Image();
floor5Img.src = "images/Hurdle/floor5.png";

let floor1Img = new Image();
floor1Img.src = "images/Hurdle/floor1.png";

let _floor10Img = new Image();
_floor10Img.src = "images/Hurdle/floor10_10.png";

let _floor5Img = new Image();
_floor5Img.src = "images/Hurdle/floor5_5.png";

let _floor1Img = new Image();
_floor1Img.src = "images/Hurdle/floor1_1.png";

//땅 설정
class Floor {
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
    ctxMain.drawImage(floor10Img, this.x, this.y, this.width, this.height);
  }
}

class Floor5 extends Floor {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(floor5Img, this.x, this.y, this.width, this.height);
  }
}

class Floor1 extends Floor {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(floor1Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor10 extends Floor {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(_floor10Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor5 extends Floor {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(_floor5Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor1 extends Floor {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(_floor1Img, this.x, this.y, this.width, this.height);
  }
}

let floor = [
  //스테이지 1 바닥 땅
  new Floor({ x: 0, y: 510, width: 800, height: 90 }),
  new Floor({ x: 800, y: 510, width: 800, height: 90 }),
  new Floor({ x: 1600, y: 510, width: 800, height: 90 }),
  new Floor({ x: 2400, y: 510, width: 800, height: 90 }),
  new Floor({ x: 3200, y: 510, width: 800, height: 90 }),
  new Floor({ x: 4000, y: 510, width: 800, height: 90 }),
  new Floor({ x: 4800, y: 510, width: 800, height: 90 }),
  new Floor({ x: 5600, y: 510, width: 800, height: 90 }),
  new Floor({ x: 6400, y: 510, width: 800, height: 90 }),
  new Floor({ x: 7200, y: 510, width: 800, height: 90 }),
  new Floor({ x: 8000, y: 510, width: 800, height: 90 }),
  new Floor({ x: 8800, y: 510, width: 800, height: 90 }),
  new Floor5({ x: 9600, y: 510, width: 400, height: 90 }),
];

let floatFloor = [
  new floatFloor5({ x: 2350, y: 410, width: 400, height: 17 }),
  new floatFloor5({ x: 2750, y: 410, width: 400, height: 17 }),
];
