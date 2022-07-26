let continueAnimating = true;

playBtn.onclick = function () {
  continueAnimating = true;
  game();
};

pauseBtn.onclick = function () {
  continueAnimating = false;
};
