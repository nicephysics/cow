function init_text() {
  var email = localStorage.getItem("email")
  var button = document.getElementById("login_button")
  var text = document.getElementById("account_text")
  
  if (email == null || email === "") {
    // user is not signed in
    text.innerHTML = "Hi!<br>"
  } else {
    // user is signed in
    text.innerHTML = "You are currently signed in as " + email + ".<br>"
  }
}

document.addEventListener("DOMContentLoaded", function() {
  init_text()
})
