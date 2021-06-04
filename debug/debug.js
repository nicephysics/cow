document.getElementById("checkbox_debug_map").addEventListener("change", function() {
  if (this.checked) {
    localStorage.setItem("debug_map", "true")
  } else {
    localStorage.setItem("debug_map", "false")
  }
})
document.getElementById("checkbox_play_music").addEventListener("change", function() {
  if (this.checked) {
    localStorage.setItem("play_music", "true")
  } else {
    localStorage.setItem("play_music", "false")
  }
})
