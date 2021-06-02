window.addEventListener("load",  function() {
  if (localStorage.getItem("unlocked") >= 15) {
    location.href = "../stream"
  }
})
