//젤리 기본 이미지
let imgJelly = new Image();
imgJelly.src = "images/Hurdle/곰돌이.png";

//젤리 클래스
class Jelly {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eat = false;
    this.speed = 2;
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
    if (this.time % this.speed === 1) {
      this.x--;
    }
    ctxMain.fillStyle = "yellow";
    ctxMain.fillRect(this.x, this.y, this.width, this.height);
    ctxMain.globalAlpha = 1;
    ctxMain.drawImage(imgJelly, this.x, this.y, this.width, this.height);
  }
}

let testJelly1 = new Jelly({ x: 750, y: 300, width: 100, height: 100 });
let testJelly2 = new Jelly({ x: 1050, y: 350, width: 100, height: 100 });

//젤리먹기 충돌체크
function jellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyY = _jelly.y - player.y;
  if (eatJellyX < 60 && eatJellyX > -60 && eatJellyY < 60 && eatJellyY > -60) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    point += 1000;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
