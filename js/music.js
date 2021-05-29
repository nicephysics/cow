function addMusicButton() {
  var music = document.createElement("audio")
  var button = document.createElement("button")
  document.getElementById("header").appendChild(music)
  document.getElementById("header").appendChild(button)
  // setup audio
  music.id = "music"
  music.hidden = true
  music.loop = true
  // setup button
  button.id = "music_button"
  button.setAttribute("class", "fa fa-play button circle-button circle-button-48 black padding margin-top margin-right large topright animate-zoom")
  button.addEventListener("click", function() {
    if (button.classList.contains("fa-play")) {
      music.play()
      button.classList.remove("fa-play")
      button.classList.add("fa-pause")
    } else {
      music.pause()
      button.classList.remove("fa-pause")
      button.classList.add("fa-play")
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  addMusicButton()
})
