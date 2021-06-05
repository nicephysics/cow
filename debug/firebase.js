var database = function() {
  return firebase.database() // yay
}

// set
database().ref("test").set("Hello World!")

// read listener
database().ref("test").on('value', (snapshot) => {
  const value = snapshot.val();
  console.log("listener", value)
})

// read one using get()
const root = database().ref()
root.child("path").child("one").get().then((snapshot) => {
  if (snapshot.exists()) {
    const value = snapshot.val()
    console.log("get", value)
  } else {
    console.log("No data available!!!")
  }
}).catch((error) => {
  console.error(error);
});

// read once using observer
firebase.database().ref("/path/one").once('value').then((snapshot) => {
  const value = snapshot.val()
  console.log("observer", value)
  // ...
});

// update
var updates = {}
updates["path/one"] = "1"
updates["path/two"] = "2"
database().ref().update(updates)

console.log(database())
