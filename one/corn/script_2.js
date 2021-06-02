window.addEventListener("load",  function() {
  if (localStorage.getItem("number") >= 31) {
    location.href = "../stream"
  }
})
