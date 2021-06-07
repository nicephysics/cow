document.addEventListener("DOMContentLoaded",  function() {
  var button = document.getElementById("stream_button")
  if (localStorage.getItem("unlocked_1") >= 15) {
    button.hidden = false
  } else {
    button.hidden = true
  }
})
