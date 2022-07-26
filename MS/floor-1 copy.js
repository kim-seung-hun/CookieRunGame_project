// //캔버스 변수 선언, 할당
let canvasMain = document.getElementById("main");
let ctxMain = canvasMain.getContext("2d");

// //캔버스 크기
canvasMain.width = 20000;
canvasMain.height = 600;

//스테이지 1 바닥땅 이미지
let floor1_10Img = new Image();
floor1_10Img.src = "images/Hurdle/floor1_10.png";

let floor1_5Img = new Image();
floor1_5Img.src = "images/Hurdle/floor1_5.png";

let floor1_1Img = new Image();
floor1_1Img.src = "images/Hurdle/floor1_1.png";

//스테이지 1 떠있는땅 이미지
let _floor1_10Img = new Image();
_floor1_10Img.src = "images/Hurdle/floor1-10.png";

let _floor1_5Img = new Image();
_floor1_5Img.src = "images/Hurdle/floor1-5.png";

let _floor1_1Img = new Image();
_floor1_1Img.src = "images/Hurdle/floor1-1.png";

//스테이지 2 바닥땅 이미지
let floor2_10Img = new Image();
floor2_10Img.src = "images/Hurdle/floor2_10.png";

let floor2_5Img = new Image();
floor2_5Img.src = "images/Hurdle/floor2_5.png";

let floor2_1Img = new Image();
floor2_1Img.src = "images/Hurdle/floor2_1.png";

//스테이지 2 떠있는땅 이미지
let _floor2_10Img = new Image();
_floor2_10Img.src = "images/Hurdle/floor2-10.png";

let _floor2_5Img = new Image();
_floor2_5Img.src = "images/Hurdle/floor2-5.png";

let _floor2_1Img = new Image();
_floor2_1Img.src = "images/Hurdle/floor2-1.png";

//투명 땅 이미지

let invisualFloor_1Img = new Image();
invisualFloor_1Img.src = "images/Hurdle/invisualFloor_1.png";

//땅 설정
class Floor1_10 {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.time = 0;
  }
  draw() {
    ctxMain.drawImage(floor1_10Img, this.x, this.y, this.width, this.height);
  }
}

class Floor1_5 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(floor1_5Img, this.x, this.y, this.width, this.height);
  }
}

class Floor1_1 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(floor1_1Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor1_10 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor1_10Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor1_5 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor1_5Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor1_1 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor1_1Img, this.x, this.y, this.width, this.height);
  }
}

class Floor2_10 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(floor2_10Img, this.x, this.y, this.width, this.height);
  }
}

class Floor2_5 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(floor2_5Img, this.x, this.y, this.width, this.height);
  }
}

class Floor2_1 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(floor2_1Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor2_10 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor2_10Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor2_5 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor2_5Img, this.x, this.y, this.width, this.height);
  }
}

class floatFloor2_1 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(_floor2_1Img, this.x, this.y, this.width, this.height);
  }
}

//안보이는 발판
class invisualFloor_1 extends Floor1_10 {
  draw() {
    ctxMain.drawImage(
      invisualFloor_1Img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

let floor = [
  //스테이지 1 바닥 땅
  new Floor1_10({ x: 0, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 800, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 1600, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 2400, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 3200, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 4000, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 4800, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 5600, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 6400, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 7200, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 8000, y: 510, width: 800, height: 90 }),
  new Floor1_10({ x: 8800, y: 510, width: 800, height: 90 }),
  new Floor1_5({ x: 9600, y: 510, width: 400, height: 90 }),

  //스테이지 2 바닥 땅
  new Floor2_10({ x: 10000, y: 510, width: 800, height: 90 }),

  new Floor2_5({ x: 11000, y: 510, width: 400, height: 90 }),

  new Floor2_5({ x: 11600, y: 510, width: 400, height: 90 }),

  new Floor2_1({ x: 12100, y: 510, width: 80, height: 90 }),

  new Floor2_1({ x: 12260, y: 510, width: 80, height: 90 }),

  new Floor2_1({ x: 12420, y: 510, width: 80, height: 90 }),

  new Floor2_10({ x: 12600, y: 510, width: 800, height: 90 }),

  new Floor2_5({ x: 13600, y: 510, width: 400, height: 90 }),

  new Floor2_5({ x: 14600, y: 510, width: 400, height: 90 }),

  new Floor2_5({ x: 15300, y: 510, width: 400, height: 90 }),

  new Floor2_10({ x: 16600, y: 510, width: 800, height: 90 }),

  new Floor2_1({ x: 17800, y: 510, width: 80, height: 90 }),

  new Floor2_1({ x: 18000, y: 510, width: 80, height: 90 }),

  new Floor2_1({ x: 18200, y: 510, width: 80, height: 90 }),

  new Floor2_5({ x: 18600, y: 510, width: 400, height: 90 }),

  new Floor2_10({ x: 19200, y: 510, width: 800, height: 90 }),
];

let floatFloor = [
  //스테이지 1 떠있는 땅
  new floatFloor1_5({ x: 2350, y: 390, width: 400, height: 17 }),
  new floatFloor1_5({ x: 2850, y: 340, width: 400, height: 17 }),

  new floatFloor1_5({ x: 4650, y: 390, width: 400, height: 17 }),

  new floatFloor1_5({ x: 6250, y: 390, width: 400, height: 17 }),
  new floatFloor1_1({ x: 6700, y: 340, width: 80, height: 17 }),
  new floatFloor1_1({ x: 6820, y: 290, width: 80, height: 17 }),
  new floatFloor1_5({ x: 6950, y: 190, width: 400, height: 17 }),
  new floatFloor1_5({ x: 7550, y: 290, width: 400, height: 17 }),

  new floatFloor1_10({ x: 8450, y: 390, width: 800, height: 17 }),
  new floatFloor1_10({ x: 8650, y: 300, width: 800, height: 17 }),
  new floatFloor1_10({ x: 8850, y: 210, width: 800, height: 17 }),

  //스테이지 2 떠있는 땅
  new floatFloor2_1({ x: 10500, y: 370, width: 80, height: 17 }),
  new floatFloor2_1({ x: 10580, y: 370, width: 80, height: 17 }),

  new floatFloor2_1({ x: 10850, y: 370, width: 80, height: 17 }),

  new floatFloor2_1({ x: 11150, y: 420, width: 80, height: 17 }),

  new floatFloor2_1({ x: 11460, y: 450, width: 80, height: 17 }),

  new floatFloor2_1({ x: 12700, y: 430, width: 80, height: 17 }),
  new floatFloor2_1({ x: 12830, y: 400, width: 80, height: 17 }),
  new floatFloor2_1({ x: 12960, y: 370, width: 80, height: 17 }),
  new floatFloor2_1({ x: 13090, y: 340, width: 80, height: 17 }),
  new floatFloor2_1({ x: 13250, y: 250, width: 80, height: 17 }),

  new floatFloor2_5({ x: 13530, y: 250, width: 400, height: 17 }),

  new floatFloor2_1({ x: 13960, y: 370, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14050, y: 470, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14090, y: 340, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14250, y: 250, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14250, y: 470, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14400, y: 300, width: 80, height: 17 }),
  new floatFloor2_1({ x: 14430, y: 470, width: 80, height: 17 }),

  new floatFloor2_1({ x: 14730, y: 370, width: 80, height: 17 }),

  new floatFloor2_1({ x: 15150, y: 450, width: 80, height: 17 }),

  new floatFloor2_5({ x: 15800, y: 530, width: 400, height: 17 }),
  new floatFloor2_1({ x: 16300, y: 530, width: 80, height: 17 }),
  new floatFloor2_1({ x: 16450, y: 530, width: 80, height: 17 }),

  new floatFloor2_1({ x: 15750, y: 370, width: 80, height: 17 }),
  new floatFloor2_10({ x: 15950, y: 250, width: 800, height: 17 }),

  new floatFloor2_1({ x: 17450, y: 390, width: 80, height: 17 }),
  new floatFloor2_1({ x: 17650, y: 300, width: 80, height: 17 }),

  new floatFloor2_1({ x: 17900, y: 300, width: 80, height: 17 }),
  new floatFloor2_1({ x: 18150, y: 300, width: 80, height: 17 }),

  new floatFloor2_1({ x: 18400, y: 400, width: 80, height: 17 }),

  new invisualFloor_1({ x: 19080, y: 540, width: 40, height: 17 }),
];
