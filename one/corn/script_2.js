window.addEventListener("load",  function() {
  if (localStorage.getItem("unlocked_1") >= 15) {
    location.href = "../stream"
  }
})
