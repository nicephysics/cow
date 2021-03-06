function play() {
  var music = document.getElementById("music")
  var button = document.getElementById("music_button")
  if (button.classList.contains("fa-play")) {
    localStorage.setItem("music_play", "true")
    music.play()
    button.classList.remove("fa-play")
    button.classList.add("fa-pause")
  } else {
    localStorage.setItem("music_play", "false")
    music.pause()
    button.classList.remove("fa-pause")
    button.classList.add("fa-play")
  }
}

function checkStorage() {
  let playing = localStorage.getItem("music_play")
  var music = document.getElementById("music")
  var button = document.getElementById("music_button")
  if (playing == null) {
    localStorage.setItem("music_play", "false")
  } else if (playing === "true") {
    music.play()
    button.classList.remove("fa-play")
    button.classList.add("fa-pause")
  } else {
    music.pause()
    button.classList.remove("fa-pause")
    button.classList.add("fa-play")
  }
  console.log(playing)
}

// webpage loaded
window.addEventListener("load", function() {
  checkStorage()
})
// back/forward buttons
window.addEventListener("popstate", function() {
  checkStorage()
})

document.addEventListener("DOMContentLoaded", function(event) {
  checkStorage()
  var button = document.getElementById("music_button")
  button.onclick = play
  // button.addEventListener("click", function() { play() })
})


/*
function addMusicButton() {
  var music = document.createElement("audio")
  var button = document.createElement("button")
  var source = document.createElement("source")
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
  document.querySelector("header").appendChild(music)
  document.querySelector("header").appendChild(button)
}
*/
