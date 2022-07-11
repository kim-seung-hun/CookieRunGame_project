//젤리 기본 이미지
let imgJelly = new Image();
imgJelly.src = "images/Jelly/일반젤리1.png";

//젤리 클래스
class Jelly {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eat = false;
    this.time = 0;
  }
  setEater() {
    this.eat = true;
  }
  getEater() {
    return this.eat;
  }
  draw() {
    this.time++;
    if (this.time % 2 == 1) {
      this.x -= 1.25;
    }
    // ctxMain.fillStyle = "yellow";
    // ctxMain.fillRect(this.x, this.y, this.width, this.height);
    // ctxMain.globalAlpha = 1;
    ctxMain.drawImage(imgJelly, this.x, this.y, this.width, this.height);
  }
}

//젤리먹기 충돌체크
function jellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
  if (
    eatJellyX < 55 &&
    eatJellyX > -55 &&
    eatJellyY < 55 &&
    eatJellyY > -55 &&
    eatJellyWidth < 55 &&
    eatJellyWidth > -55 &&
    eatJellyHeight < 55 &&
    eatJellyHeight > -55
  ) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    point += 3333;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

let jellyDraw = [
  new Jelly({ x: 510, y: 370, width: 40, height: 40 }),
  new Jelly({ x: 540, y: 345, width: 40, height: 40 }),
  new Jelly({ x: 570, y: 320, width: 40, height: 40 }),
  new Jelly({ x: 600, y: 345, width: 40, height: 40 }),
  new Jelly({ x: 630, y: 370, width: 40, height: 40 }),
];
