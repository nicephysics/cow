var provider = new firebase.auth.GoogleAuthProvider()

function is_logged_in() {
  var email = localStorage.getItem("email")
  if (email == null) {
    email = ""
    localStorage.setItem("email", email)
  }
  return (email != "")
}

function clear_all_data() {
  localStorage.setItem("unlocked_1", 0)
  localStorage.setItem("unlocked_2", 0)
  localStorage.setItem("map_visits", 0)
}

function count_binary(number) {
  var ones = 0
  var str = number.toString(2)
  var i = str.length;
  while (i--) {
    if (str.charAt(i) === '1') {
      ones++
    }
  }
  return ones
}

function get_pages_from(num) {
  var number = localStorage.getItem("unlocked_" + num) || 0
  return count_binary(number)
}

function update_div() {
  var data_text = document.getElementById("data_text")
  var items = 0 // TODO inventory
  var one = get_pages_from(1)
  var two = get_pages_from(2)
  var three = get_pages_from(3)
  var string = ""
  if (items > 0) {
    string += "You have " + items + " items in your inventory.<br>"
  }
  if (one > 0) {
    string += "You have visited " + (one+3) + " pages in the first adventure.<br>"
  }
  if (two > 0) {
    string += "You have visited " + two + " pages in the second adventure.<br>"
  }
  if (three > 0) {
    string += "You have visited " + three + " pages in the third adventure.<br>"
  }
  if (string === "") {
    string = "You have no data in your account."
  }
  data_text.innerHTML = string
}

function init_text() {
  var email = localStorage.getItem("email")
  var button = document.getElementById("login_button")
  var text = document.getElementById("account_text")
  var div = document.getElementById("signed_in")
  
  if (email == null || email === "") {
    // user is not signed in
    text.innerHTML =
`
Hi!
<br>
You can create an account or sign in here.
<br>
Accounts can save your progress! Only Google accounts are supported.
`
    div.hidden = true
  } else {
    // user is signed in
    text.innerHTML =
`
You are currently signed in as ${email}@gmail.com!
<br>
`
    div.hidden = false
    update_div()
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
    clear_all_data()
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
