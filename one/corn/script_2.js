window.addEventListener("load",  function() {
  if (localStorage.getItem("unlocked") >= 31) {
    location.href = "../stream"
  }
})
