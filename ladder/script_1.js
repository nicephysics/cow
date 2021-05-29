var answer = document.getElementById("answer")

function check() {
  if (answer.value === "5.78 m" || answer.value === "5.78m" || answer.value === "5.8 m" || answer.value === "5.8m" || answer.value === "578 cm" || answer.value === "578cm" ) {
    window.location.href = "https://nicephysics.github.io/moments/corn"
  } else {
    // wrong!
    fade = function(element, startcolor, endcolor, time_elapsed) {
      var currentcolor = startcolor,
          colorchange = [
            (endcolor[0] - startcolor[0]) / time_elapsed / 60,
            (endcolor[1] - startcolor[1]) / time_elapsed / 60,
            (endcolor[2] - startcolor[2]) / time_elapsed / 60
          ],
          stepcount = 0,
          stepinc = 1,
          maxsteps = time_elapsed * 60, // 1 second
          timer = setInterval(function() {
            currentcolor[0] = currentcolor[0] + stepinc * colorchange[0]
            currentcolor[1] = currentcolor[1] + stepinc * colorchange[1]
            currentcolor[2] = currentcolor[2] + stepinc * colorchange[2]
            element.style.backgroundColor = 'rgb(' + parseInt(currentcolor[0]).toString() + ',' + parseInt(currentcolor[1]).toString() + ',' + parseInt(currentcolor[2]).toString() + ')'
            console.log(element.style)
            stepcount += stepinc;
            if (stepcount >= maxsteps) {
              stepinc = -1;
            } else if (stepcount < 0) {
                element.style.backgroundColor = 'rgb(' + parseInt(startcolor[0]).toString() + ',' + parseInt(startcolor[1]).toString() + ',' + parseInt(startcolor[2]).toString() + ')'
                clearInterval(timer)
            }
          }, 16)
    // end of fade function definition
    }
    fade(document.getElementById("wrapper"), [76, 175, 80], [175, 76, 80], 0.6)
    // moo!
    moo()
  }
}

function hint1() {
  var button = document.getElementById("button_hint_1")
  if (document.getElementById("text_hint_1") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_1"
    p.innerHTML = "Hint 1: Draw a diagram and include all the forces acting on the ladder."
    document.getElementById("footer").appendChild(p)
  }
}

function hint2() {
  var button = document.getElementById("button_hint_2")
  if (document.getElementById("text_hint_2") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_2"
    p.innerHTML = "Hint 2: There are two forces acting on the ladder by the ground! Don't forget the weight of the ladder."
    document.getElementById("footer").appendChild(p)
  }
}

function hint3() {
  var button = document.getElementById("button_hint_3")
  if (document.getElementById("text_hint_3") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_3"
    p.innerHTML = "Hint 3: Use Fnet = 0 (upward forces = downward forces) to find the normal force on the ladder by the ground."
    document.getElementById("footer").appendChild(p)
  }
}

function hint4() {
  var button = document.getElementById("button_hint_4")
  if (document.getElementById("text_hint_4") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_4"
    p.innerHTML = "Hint 4: Take moments about the pivot at the top of the ladder, because you don't know the normal force by the wall on the ladder."
    document.getElementById("footer").appendChild(p)
  }
}

function hint5() {
  var button = document.getElementById("button_hint_5")
  if (document.getElementById("text_hint_5") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_5"
    p.innerHTML = "Hint 5: Use the principle of moments to calculate the answer! Remember that the distance required is the distance from the bottom of the ladder."
    document.getElementById("footer").appendChild(p)
  }
}
