document.addEventListener("DOMContentLoaded",  function() {
  var div = document.getElementById("stream_div")
  if (localStorage.getItem("unlocked_1") >= 15) {
    div.hidden = false
  } else {
    div.hidden = true    
  }
})
