var sound;
function init_cow(str) {
  sound = new Audio(str)
}
function moo() {
  sound.play()
  sound.currentTime = 0;
}
