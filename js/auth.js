var provider = new firebase.auth.GoogleAuthProvider()

function is_logged_in() {
  var email = localStorage.getItem("email")
  if (email == null) {
    email = ""
    localStorage.setItem("email", email)
  }
  return (email != "")
}

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

function init() {
  var button = document.getElementById("login_button")
  if (is_logged_in()) {
    // user is logged in
    button.innerHTML = "<i class='fa fa-user-times'></i>  Sign out"
  } else {
    // user is logged out
    button.innerHTML = "<i class='fa fa-user-plus'></i>  Sign in with Google"    
  }
  // call the above function
  init_text()
}

function login() {
  if (is_logged_in()) {
    // user is logged in
    firebase.auth().signOut()
    localStorage.setItem("email", "")
    // init again
    init()
  } else {
    // user is logged out 
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        // The signed-in user info.
        var user = result.user
        // log the result
        console.log(result)
        // set email in local storage
        var email = user.email
        if (email.endsWith("@gmail.com")) {
          email = email.substring(0, email.length - 10)
        }
        localStorage.setItem("email", email)
        console.log(email)
        // init again
        init()
      }).catch((error) => {
        // Handle errors here...
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // log the error
        console.error(error)
      })
  }
  // end login function
}

document.addEventListener("DOMContentLoaded", function() {
  init()
})
