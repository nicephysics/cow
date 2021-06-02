// returns the document number
function get_page_number() {
  let title = document.title
  switch(title) {
    case "The Cave":
      return 0
    case "The Ladder":
      return 1
    case "The Corn":
      return 2
    case "The End":
      return 3
    case "The Stream":
      return 4
    case "The Dark Room":
      return 5
    case "The Maze":
      return 6
    case "The Bright Room":
      return 7
    case "The Hole in the Wall":
      return 8
    case "The Secret Room":
      return 9
    case "The Control Room":
      return 10
    default:
      return -1
  }
}

// returns a map link
function get_map_from_number(number) {
  switch (number) {
    case 0:
      return "../../assets/cow.png"
    case 1:
      return "../../assets/map/map1_1_18889.png"
    case 3:
      return "../../assets/map/map1_3_51785.png"
    case 7:
      return "../../assets/map/map1_7_117577.png"
    case 15:
      return "../../assets/map/map1_15_249161.png"
    case 31:
      return "../../assets/map/map1_31_512329.png"
  }
}

function get_number() {
  let number = localStorage.getItem("unlocked")
  if (number == null || typeof number !== "number") {
    localStorage.setItem("unlocked", 0)
    number = 0
  }
  let current = Math.pow(2, get_page_number())
  if ((number | current) !== number) {
    number = number | current
    localStorage.setItem("unlocked", number)
  }
  return number
}

function get_binary_percent(number) {
  let ones = 3
  let total = 14
  for (let c of number.toString(2)) {
    if (c === '1') {
      ones++
    }
  }
  return ones / total * 100
}

function create() {
  // Get the map string
  var map_number = get_number()
  var map_string = get_map_from_number(map_number)
  
  // Get the modal
  var body = document.querySelector("body")
  var button = document.createElement("button")
  var map_icon = document.createElement("img")
  var popup = document.createElement("div")
  var content = document.createElement("div")
  var close = document.createElement("span")
  var map_link = document.createElement("a")
  var map = document.createElement("img")
  var text = document.createElement("p")
  
  button.id = "popup_button"
  button.setAttribute("class", "fas fa-map-marked-alt button map-button padding margin-top margin-left large topleft animate-zoom") // styles
  button.innerHTML = `<i class="fas fa-map-marked-alt"></i>`
  
  map_icon.id = "popup_button_icon"
  map_icon.setAttribute("class", "center image-fit")
  map_icon.src = "../../assets/map/map_cave_icon.png"
  
  popup.id = "popup"
  popup.classList.add("popup")
  
  content.id = "popup_content"
  content.classList.add("popup-content")
  
  close.id = "popup_close"
  close.classList.add("popup-close")
  close.innerHTML = `&times;`
  
  text.id = "popup_text"
  text.setAttribute("class", "center")
  text.innerHTML = `You have completed ` + Math.floor(get_binary_percent(map_number)) + ` of the puzzle, including secrets!`
  
  map_link.id = "popup_map_link"
  map_link.setAttribute("class", "center image-fit") // styles
  map_link.href = map_string
  
  map.id = "popup_map"
  map.setAttribute("class", "center image-fit") // is this needed?
  map.src = map_string
 
  body.appendChild(button)
  body.appendChild(popup)
  button.appendChild(map_icon)
  popup.appendChild(content)
  content.appendChild(close)
  content.appendChild(text)
  content.appendChild(map_link)
  map_link.appendChild(map)
  
  // logs
  console.log(content, content.width, content.height)
  console.log(map_link, map.width, map.height)

  // When the user clicks on the button, open the modal
  button.onclick = function() {
    popup.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    popup.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
  
  // end of create function
}

window.addEventListener("load", function() {
  create()
})
