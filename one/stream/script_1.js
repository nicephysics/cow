var answer = document.getElementById("answer")

function check() {
  let val = answer.value.replace(/\s/g, '')
  let ans = (val === "1010")
  if (ans) {
    window.location.href = "../dark_room"
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
    // angry moo
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

function hint1() {
  var button = document.getElementById("button_hint_1")
  if (document.getElementById("text_hint_1_1") == null) {
    var p = document.createElement("p")
    var image = document.createElement("img")
    var p2 = document.createElement("p")
    
    p.id = "text_hint_1_1"
    p.classList.add("padding-16")
    p.innerHTML =
      "Clarification: the \"combined density\" referred to in the question is the <i>apparent</i> density of the corn that has the mass of both the corn and the cow."
    
    image.id = "text_image_1"
    image.setAttribute("class", "center padding-16")
    image.src = "../../assets/stream_hint.png"
    
    p2.id = "text_hint_1_2"
    p2.classList.add("padding-16")
    p2.innerHTML =
      "This image is made using Microsoft Paint. Download the best paint software <a href='../../assets/paint_xp.png'>here</a>!"
    
    document.getElementById("footer").appendChild(p)
    document.getElementById("footer").appendChild(image)
    document.getElementById("footer").appendChild(p2)
    
    (document.scrollingElement || document.documentElement || document.body).scrollTop = scrollingElement.scrollHeight
  }
}

function hint2() {
  var button = document.getElementById("button_hint_2")
  if (document.getElementById("text_hint_2") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-16")
    p.id = "text_hint_2"
    p.innerHTML = "Hint: Add together the two masses and divide by the volume of the corn!<br>Remember density = mass / volume, and in this case, the cow is not touching the water."
    document.getElementById("footer").appendChild(p)
    (document.scrollingElement || document.documentElement || document.body).scrollTop = scrollingElement.scrollHeight
  }
}
