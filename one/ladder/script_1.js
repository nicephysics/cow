var answer = document.getElementById("answer")

function check() {
  let val = answer.value.replace(/\s/g, '')
  let ans = (val === "5.78m" || val === "5.8m" || val === "578cm")
  if (ans) {
    window.location.href = "../corn"
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
  return ans
}

answer.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // "enter"
    event.preventDefault()
    check()
  }
})

function scroll_to_bottom() {
  let e = (document.scrollingElement || document.documentElement || document.body)
  e.scrollTop = e.scrollHeight
}

function hint1() {
  var button = document.getElementById("button_hint_1")
  if (document.getElementById("text_hint_1") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_1"
    p.innerHTML = "Hint 1: Draw a diagram and include all the forces acting on the ladder."
    document.getElementById("footer").appendChild(p)
    scroll_to_bottom()
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
    scroll_to_bottom()
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
    scroll_to_bottom()
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
    scroll_to_bottom()
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
    scroll_to_bottom()
  }
}

function diagram() {
  var button = document.getElementById("button_diagram")
  if (document.getElementById("text_diagram_1") == null) {
    var p = document.createElement("p")
    var image = document.createElement("img")
    var p2 = document.createElement("p")
    
    p.classList.add("padding-8")
    p.id = "text_diagram_1"
    p.innerHTML = 
      "Here is a complete diagram of the question... can you solve it?"
    
    image.id = "text_image_1"
    image.setAttribute("class", "center padding-16")
    image.src = "../../assets/ladder_hint.png"
    
    p2.id = "text_diagram_2"
    p2.classList.add("padding-16")
    p2.innerHTML =
      "This image is made using Microsoft Paint. Download the best paint software <a href='../../assets/paint_xp.png'>here</a>!"
    
    document.getElementById("footer").appendChild(p)
    document.getElementById("footer").appendChild(image)
    document.getElementById("footer").appendChild(p2)
    
    scroll_to_bottom()
  }
}
