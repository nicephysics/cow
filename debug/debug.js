var debug_map = document.getElementById("checkbox_debug_map")
var music_play = document.getElementById("checkbox_play_music")

debug_map.addEventListener("change", function() {
  if (this.checked) {
    localStorage.setItem("debug_map", "true")
  } else {
    localStorage.setItem("debug_map", "false")
  }
})
music_play.addEventListener("change", function() {
  if (this.checked) {
    localStorage.setItem("music_play", "true")
  } else {
    localStorage.setItem("music_play", "false")
  }
})

document.addEventListener("DOMContentLoaded", function() {
  debug_map.checked = (localStorage.getItem("debug_map") === "true")
  music_play.checked = (localStorage.getItem("music_play") === "true")
})
