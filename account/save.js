var database = function() {
  return firebase.database() // yay
}

function email(path = "") {
  return localStorage.getItem("email") + "/" + path
}

function save_object() {
  return {
    map: (localStorage.getItem("map_visits") || "0"),
    one: (localStorage.getItem("unlocked_1") || "0"),
    two: (localStorage.getItem("unlocked_2") || "0"),
    three: (localStorage.getItem("unlocked_3") || "0"),
    inventory: {}
  }
}

function load_object(obj) {
  localStorage.setItem("map_visits", obj.map)
  localStorage.setItem("unlocked_1", obj.one)
  localStorage.setItem("unlocked_2", obj.two)
  localStorage.setItem("unlocked_3", obj.three)
  return
}

function set(path, value) {
  return database().ref(path).set(value)
}

// to use: get("/path/to/thing", (value) => { ... })
function get(path, on) {
  // read once using observer
  firebase.database().ref(path).once('value').then((snapshot) => {
    const value = snapshot.val()
    on(value)
  });
}

function save() {
  var obj = save_object()
  set(email(), obj)
}

function load() {
  get(email(), (obj) => {
    load_object(obj)
  })
}
