var answer = document.getElementById("answer")

function check() {
  let val = answer.value.replace(/\s/g, '')
  let ans = (val === "10.6m/s" || val === "11m/s")
  if (ans) {
    window.location.href = "https://nicephysics.github.io/cow/one/end_itsh"
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
  if (document.getElementById("text_hint_1") == null) {
    var p = document.createElement("p")
    p.classList.add("padding-8")
    p.id = "text_hint_1"
    p.innerHTML = "Hint: Use kinematics or draw a v-t graph!"
    document.getElementById("footer").appendChild(p)
  }
}
