//젤리 기본 이미지
let whiteJellyImg = new Image();
whiteJellyImg.src = "images/Jelly/일반젤리1.png";

let yellowJellyImg = new Image();
yellowJellyImg.src = "images/Jelly/노란젤리1.png";

let redJellyImg = new Image();
redJellyImg.src = "images/Jelly/빨간젤리1.png";

let bigJellyImg = new Image();
bigJellyImg.src = "images/Jelly/왕젤리1.png";

let clearJellyImg = new Image();
clearJellyImg.src = "images/Jelly/클리어젤리.png";

let hpPotionImg = new Image();
hpPotionImg.src = "images/HP/potion.png";

//젤리 클래스
class WhiteJelly {
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
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(whiteJellyImg, this.x, this.y, this.width, this.height);
  }
}

class YellowJelly extends WhiteJelly {
  draw() {
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(yellowJellyImg, this.x, this.y, this.width, this.height);
  }
}

class RedJelly extends WhiteJelly {
  draw() {
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(redJellyImg, this.x, this.y, this.width, this.height);
  }
}

class BigJelly extends WhiteJelly {
  draw() {
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(bigJellyImg, this.x, this.y, this.width, this.height);
  }
}

class HpPotion extends WhiteJelly {
  draw() {
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(hpPotionImg, this.x, this.y, this.width, this.height);
  }
}

class ClearJelly extends WhiteJelly {
  draw() {
    // this.time++;
    // if (this.time % 1 == 0) {
    //   this.x -= 2.35;
    // }
    ctxMain.drawImage(clearJellyImg, this.x, this.y, this.width, this.height);
  }
}

//젤리먹기 충돌체크
function whitejellyEat(player, _jelly) {
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
    point += 1111;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
function yellowjellyEat(player, _jelly) {
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
function redjellyEat(player, _jelly) {
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
    point += 5555;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
function bigjellyEat(player, _jelly) {
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
    point += 33333;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

function hppotionEat(player, _potion) {
  let eatJellyX = _potion.x - player.x;
  let eatJellyWidth = _potion.x + _potion.width - (player.x + player.width);
  let eatJellyY = _potion.y - player.y;
  let eatJellyHeight = _potion.y + _potion.height - (player.y + player.height);
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
    _potion.setEater();
    ctxMain.clearRect(_potion.x, _potion.y, _potion.width, _potion.height);
  } else if (_potion.getEater() == false) {
    _potion.draw();
  }
}

function clearjellyEat(player, _jelly) {
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
    point += 333333;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

let whiteJelly = [
  new WhiteJelly({ x: 510, y: 380, width: 40, height: 40 }),
  new WhiteJelly({ x: 535, y: 355, width: 40, height: 40 }),
  new WhiteJelly({ x: 560, y: 330, width: 40, height: 40 }),
  new WhiteJelly({ x: 585, y: 355, width: 40, height: 40 }),
  new WhiteJelly({ x: 610, y: 380, width: 40, height: 40 }),

  new WhiteJelly({ x: 1760, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1810, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1860, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1910, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1960, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2010, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2060, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2110, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2160, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2210, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 2310, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2360, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2410, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2460, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2510, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2510, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2560, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2610, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2660, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2710, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 2810, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2860, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2910, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2960, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3010, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3060, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3110, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3160, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3210, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 4315, y: 370, width: 40, height: 40 }),
  new WhiteJelly({ x: 4355, y: 360, width: 40, height: 40 }),
  new WhiteJelly({ x: 4395, y: 370, width: 40, height: 40 }),

  new WhiteJelly({ x: 4920, y: 190, width: 40, height: 40 }),
  new WhiteJelly({ x: 4970, y: 160, width: 40, height: 40 }),
  new WhiteJelly({ x: 5020, y: 190, width: 40, height: 40 }),

  new WhiteJelly({ x: 5230, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5270, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5310, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5350, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5390, y: 460, width: 40, height: 40 }),

  new WhiteJelly({ x: 5490, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5560, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 5570, y: 390, width: 40, height: 40 }),
  new WhiteJelly({ x: 5590, y: 320, width: 40, height: 40 }),
  new WhiteJelly({ x: 5650, y: 290, width: 40, height: 40 }),
  new WhiteJelly({ x: 5710, y: 320, width: 40, height: 40 }),
  new WhiteJelly({ x: 5730, y: 390, width: 40, height: 40 }),
  new WhiteJelly({ x: 5750, y: 460, width: 40, height: 40 }),

  new WhiteJelly({ x: 8300, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8350, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8400, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8450, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8500, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8550, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8600, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8650, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8700, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8750, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8800, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8850, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8900, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 8950, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9000, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9050, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9100, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9150, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9200, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9250, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9300, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 9350, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 8850, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 8900, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 8950, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9000, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9050, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9100, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9150, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9250, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9300, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9350, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9450, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9500, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9550, y: 150, width: 40, height: 40 }),
  new WhiteJelly({ x: 9600, y: 150, width: 40, height: 40 }),

  new WhiteJelly({ x: 10170, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10200, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10230, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 10400, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10450, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10500, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10550, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 10600, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 10500, y: 300, width: 40, height: 40 }),
  new WhiteJelly({ x: 10550, y: 300, width: 40, height: 40 }),
  new WhiteJelly({ x: 10600, y: 300, width: 40, height: 40 }),

  new WhiteJelly({ x: 10870, y: 300, width: 40, height: 40 }),

  new WhiteJelly({ x: 11050, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 11100, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 11150, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 11200, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 11250, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 11300, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 11480, y: 400, width: 40, height: 40 }),

  new WhiteJelly({ x: 11480, y: 400, width: 40, height: 40 }),

  new WhiteJelly({ x: 11630, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 11680, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 11730, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 11850, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 11900, y: 460, width: 40, height: 40 }),
  new WhiteJelly({ x: 11950, y: 460, width: 40, height: 40 }),
];

let yellowJelly = [
  new YellowJelly({ x: 810, y: 380, width: 40, height: 40 }),
  new YellowJelly({ x: 835, y: 355, width: 40, height: 40 }),
  new YellowJelly({ x: 860, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 885, y: 355, width: 40, height: 40 }),
  new YellowJelly({ x: 910, y: 380, width: 40, height: 40 }),

  new YellowJelly({ x: 2240, y: 360, width: 40, height: 40 }),
  new YellowJelly({ x: 2270, y: 340, width: 40, height: 40 }),
  new YellowJelly({ x: 2300, y: 320, width: 40, height: 40 }),
  new YellowJelly({ x: 2360, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2410, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2460, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2510, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2560, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2610, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2660, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2710, y: 300, width: 40, height: 40 }),

  new YellowJelly({ x: 3310, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3360, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3410, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3460, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3510, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3560, y: 450, width: 40, height: 40 }),

  new YellowJelly({ x: 3860, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 3910, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 3960, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4010, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4060, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4110, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4160, y: 460, width: 40, height: 40 }),

  new YellowJelly({ x: 4520, y: 310, width: 40, height: 40 }),
  new YellowJelly({ x: 4570, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 4620, y: 310, width: 40, height: 40 }),

  new YellowJelly({ x: 5790, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 5840, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 5890, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 5940, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 5970, y: 400, width: 40, height: 40 }),

  new YellowJelly({ x: 6700, y: 430, width: 40, height: 40 }),
  new YellowJelly({ x: 6700, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 6750, y: 430, width: 40, height: 40 }),
  new YellowJelly({ x: 6750, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 6800, y: 430, width: 40, height: 40 }),
  new YellowJelly({ x: 6800, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 6850, y: 430, width: 40, height: 40 }),
  new YellowJelly({ x: 6850, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 6900, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 6900, y: 430, width: 40, height: 40 }),

  new YellowJelly({ x: 6950, y: 390, width: 40, height: 40 }),
  new YellowJelly({ x: 6950, y: 370, width: 40, height: 40 }),
  new YellowJelly({ x: 7000, y: 310, width: 40, height: 40 }),
  new YellowJelly({ x: 7000, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 7050, y: 310, width: 40, height: 40 }),
  new YellowJelly({ x: 7050, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 7100, y: 390, width: 40, height: 40 }),
  new YellowJelly({ x: 7100, y: 370, width: 40, height: 40 }),
  new YellowJelly({ x: 7150, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 7150, y: 430, width: 40, height: 40 }),
  new YellowJelly({ x: 7200, y: 390, width: 40, height: 40 }),
  new YellowJelly({ x: 7200, y: 370, width: 40, height: 40 }),
  new YellowJelly({ x: 7250, y: 310, width: 40, height: 40 }),
  new YellowJelly({ x: 7250, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 7300, y: 310, width: 40, height: 40 }),
  new YellowJelly({ x: 7300, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 7350, y: 390, width: 40, height: 40 }),
  new YellowJelly({ x: 7350, y: 370, width: 40, height: 40 }),
  new YellowJelly({ x: 7400, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 7400, y: 430, width: 40, height: 40 }),

  new YellowJelly({ x: 8450, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8500, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8550, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8600, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8650, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8700, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8750, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8800, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8850, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 8950, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 9000, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 9050, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 9100, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 9150, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 9200, y: 330, width: 40, height: 40 }),

  new YellowJelly({ x: 12120, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 12280, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 12440, y: 450, width: 40, height: 40 }),

  new YellowJelly({ x: 12700, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 12720, y: 350, width: 40, height: 40 }),
  new YellowJelly({ x: 12800, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 12850, y: 320, width: 40, height: 40 }),
  new YellowJelly({ x: 12900, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 12980, y: 290, width: 40, height: 40 }),
  new YellowJelly({ x: 13000, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 13100, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 13110, y: 260, width: 40, height: 40 }),
  new YellowJelly({ x: 13270, y: 180, width: 40, height: 40 }),
  new YellowJelly({ x: 13300, y: 450, width: 40, height: 40 }),

  new YellowJelly({ x: 13550, y: 180, width: 40, height: 40 }),
  new YellowJelly({ x: 13630, y: 180, width: 40, height: 40 }),
  new YellowJelly({ x: 13800, y: 180, width: 40, height: 40 }),
  new YellowJelly({ x: 13880, y: 180, width: 40, height: 40 }),

  new YellowJelly({ x: 13650, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 13720, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 13920, y: 450, width: 40, height: 40 }),

  new YellowJelly({ x: 14600, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 14700, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 14900, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 14700, y: 450, width: 40, height: 40 }),
];

let redJelly = [
  new RedJelly({ x: 1110, y: 380, width: 40, height: 40 }),
  new RedJelly({ x: 1135, y: 355, width: 40, height: 40 }),
  new RedJelly({ x: 1160, y: 330, width: 40, height: 40 }),
  new RedJelly({ x: 1185, y: 355, width: 40, height: 40 }),
  new RedJelly({ x: 1210, y: 380, width: 40, height: 40 }),

  new RedJelly({ x: 2810, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2860, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2910, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2960, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3010, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3060, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3110, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3160, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3210, y: 270, width: 40, height: 40 }),

  new RedJelly({ x: 3660, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 3710, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 3760, y: 450, width: 40, height: 40 }),

  new RedJelly({ x: 4710, y: 320, width: 40, height: 40 }),
  new RedJelly({ x: 4770, y: 320, width: 40, height: 40 }),
  new RedJelly({ x: 4830, y: 320, width: 40, height: 40 }),
  new RedJelly({ x: 4890, y: 320, width: 40, height: 40 }),

  new RedJelly({ x: 6050, y: 370, width: 40, height: 40 }),
  new RedJelly({ x: 6110, y: 390, width: 40, height: 40 }),
  new RedJelly({ x: 6150, y: 450, width: 40, height: 40 }),

  new RedJelly({ x: 6250, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 6320, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 6390, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 6460, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 6530, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 6600, y: 450, width: 40, height: 40 }),

  new RedJelly({ x: 6700, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 6720, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 6740, y: 270, width: 40, height: 40 }),

  new RedJelly({ x: 6820, y: 220, width: 40, height: 40 }),
  new RedJelly({ x: 6840, y: 220, width: 40, height: 40 }),
  new RedJelly({ x: 6860, y: 220, width: 40, height: 40 }),

  new RedJelly({ x: 6860, y: 220, width: 40, height: 40 }),
  new RedJelly({ x: 6860, y: 220, width: 40, height: 40 }),
  new RedJelly({ x: 6860, y: 220, width: 40, height: 40 }),

  new RedJelly({ x: 6930, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 6930, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 6980, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 6980, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7030, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7030, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7080, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7080, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7200, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7200, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7250, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7250, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7300, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7300, y: 110, width: 40, height: 40 }),

  new RedJelly({ x: 7400, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7400, y: 110, width: 40, height: 40 }),
  new RedJelly({ x: 7450, y: 150, width: 40, height: 40 }),
  new RedJelly({ x: 7450, y: 130, width: 40, height: 40 }),
  new RedJelly({ x: 7500, y: 170, width: 40, height: 40 }),
  new RedJelly({ x: 7500, y: 150, width: 40, height: 40 }),

  new RedJelly({ x: 8650, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8700, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8750, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8800, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8850, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8900, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 8950, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9050, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9100, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9150, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9200, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9250, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9300, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9350, y: 240, width: 40, height: 40 }),
  new RedJelly({ x: 9400, y: 240, width: 40, height: 40 }),

  new RedJelly({ x: 15330, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 15490, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 15650, y: 450, width: 40, height: 40 }),

  new RedJelly({ x: 15800, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 15850, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 15900, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 15950, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 16150, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 16320, y: 460, width: 40, height: 40 }),
  new RedJelly({ x: 16470, y: 460, width: 40, height: 40 }),

  new RedJelly({ x: 15950, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16000, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16150, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16200, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16250, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16400, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16450, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16500, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16650, y: 190, width: 40, height: 40 }),
  new RedJelly({ x: 16700, y: 190, width: 40, height: 40 }),

  new RedJelly({ x: 16600, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 16650, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 16700, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 16850, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 16900, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17050, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17100, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17150, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17200, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17250, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17300, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 17350, y: 450, width: 40, height: 40 }),

  new RedJelly({ x: 17470, y: 320, width: 40, height: 40 }),
];

let bigJelly = [
  new BigJelly({ x: 1410, y: 260, width: 100, height: 100 }),
  new BigJelly({ x: 1440, y: 235, width: 100, height: 100 }),
  new BigJelly({ x: 1470, y: 210, width: 100, height: 100 }),
  new BigJelly({ x: 1500, y: 235, width: 100, height: 100 }),
  new BigJelly({ x: 1530, y: 260, width: 100, height: 100 }),

  new BigJelly({ x: 3310, y: 110, width: 100, height: 100 }),
  new BigJelly({ x: 3390, y: 80, width: 100, height: 100 }),
  new BigJelly({ x: 3470, y: 110, width: 100, height: 100 }),

  new BigJelly({ x: 5070, y: 180, width: 100, height: 100 }),
  new BigJelly({ x: 5070, y: 290, width: 100, height: 100 }),
  new BigJelly({ x: 5070, y: 400, width: 100, height: 100 }),

  new BigJelly({ x: 6270, y: 250, width: 100, height: 100 }),
  new BigJelly({ x: 6330, y: 190, width: 100, height: 100 }),
  new BigJelly({ x: 6390, y: 150, width: 100, height: 100 }),
  new BigJelly({ x: 6450, y: 190, width: 100, height: 100 }),
  new BigJelly({ x: 6510, y: 250, width: 100, height: 100 }),

  new BigJelly({ x: 7550, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7600, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7650, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7700, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7750, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7800, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 7850, y: 400, width: 100, height: 100 }),

  new BigJelly({ x: 7550, y: 160, width: 100, height: 100 }),
  new BigJelly({ x: 7630, y: 160, width: 100, height: 100 }),
  new BigJelly({ x: 7720, y: 30, width: 100, height: 100 }),
  new BigJelly({ x: 7830, y: 160, width: 100, height: 100 }),

  new BigJelly({ x: 8080, y: 380, width: 100, height: 100 }),

  new BigJelly({ x: 9620, y: 380, width: 100, height: 100 }),
  new BigJelly({ x: 9870, y: 380, width: 100, height: 100 }),

  new BigJelly({ x: 11760, y: 350, width: 100, height: 100 }),

  new BigJelly({ x: 17790, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 17890, y: 190, width: 100, height: 100 }),
  new BigJelly({ x: 17990, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 18140, y: 190, width: 100, height: 100 }),
  new BigJelly({ x: 18190, y: 400, width: 100, height: 100 }),

  new BigJelly({ x: 18590, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 18900, y: 400, width: 100, height: 100 }),

  new BigJelly({ x: 19050, y: 300, width: 100, height: 100 }),

  new BigJelly({ x: 19200, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 19300, y: 400, width: 100, height: 100 }),
  new BigJelly({ x: 19400, y: 400, width: 100, height: 100 }),
];

let hpPotion = [
  new HpPotion({ x: 3610, y: 320, width: 40, height: 45 }),
  new HpPotion({ x: 4460, y: 450, width: 40, height: 45 }),
  new HpPotion({ x: 6050, y: 300, width: 40, height: 45 }),
  new HpPotion({ x: 8030, y: 330, width: 40, height: 45 }),
  new HpPotion({ x: 10030, y: 430, width: 40, height: 45 }),
  new HpPotion({ x: 11480, y: 300, width: 40, height: 45 }),
  new HpPotion({ x: 16870, y: 370, width: 40, height: 45 }),
  new HpPotion({ x: 17670, y: 230, width: 40, height: 45 }),
];

let clearJelly = new ClearJelly({ x: 19700, y: 330, width: 200, height: 150 });
