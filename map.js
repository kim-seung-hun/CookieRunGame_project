let floorImg = new Image();
floorImg.src = "images/Hurdle/floor.png";

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
    ctx.drawImage(floorImg, this.x, this.y, this.width, this.height);
  }
}

let floor = [
  new Floor({ x: 0, y: 510, width: 80, height: 90 }),
  new Floor({ x: 80, y: 510, width: 80, height: 90 }),
  new Floor({ x: 160, y: 510, width: 80, height: 90 }),
  new Floor({ x: 240, y: 510, width: 80, height: 90 }),
  new Floor({ x: 320, y: 510, width: 80, height: 90 }),
  new Floor({ x: 400, y: 510, width: 80, height: 90 }),
  new Floor({ x: 480, y: 510, width: 80, height: 90 }),
  new Floor({ x: 560, y: 510, width: 80, height: 90 }),
  new Floor({ x: 640, y: 510, width: 80, height: 90 }),
  new Floor({ x: 720, y: 510, width: 80, height: 90 }),
  new Floor({ x: 800, y: 510, width: 80, height: 90 }),
  new Floor({ x: 880, y: 510, width: 80, height: 90 }),
  new Floor({ x: 960, y: 510, width: 80, height: 90 }),
];
