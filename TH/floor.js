let floorImg = new Image();
floorImg.src = "images/Hurdle/floor10.png";

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
    if (this.time % 2 == 1) {
      this.x--;
    }
    ctxMain.drawImage(floorImg, this.x, this.y, this.width, this.height);
  }
}

// class Floor extends Floor5 {}

let floor = [
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
  new Floor({ x: 9600, y: 510, width: 800, height: 90 }),
  new Floor({ x: 9600, y: 510, width: 800, height: 90 }),
  new Floor({ x: 9600, y: 510, width: 800, height: 90 }),
];
