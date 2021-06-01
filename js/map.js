// returns a map link
function get_map() {
  return "../../assets/map/map1_15_249161.png"
}

function create() {
  // Get the map string
  var map_string = get_map()
  // Get the modal
  var body = document.querySelector("body")
  var button = document.createElement("button")
  var popup = document.createElement("div")
  var content = document.createElement("div")
  var close = document.createElement("span")
  var map_link = document.createElement("a")
  var map = document.createElement("img")
  var text = document.createElement("p")
  
  popup.id = "popup"
  popup.classList.add("popup")
  
  button.id = "popup_button"
  button.setAttribute("class", "fas fa-map-marked-alt button map-button padding margin-top margin-left large topleft animate-zoom") // styles
  button.innerHTML = `<i class="fas fa-map-marked-alt"></i>`
  
  content.id = "popup_content"
  content.classList.add("popup-content")
  
  close.id = "popup_close"
  close.classList.add("popup-close")
  close.innerHTML = `&times;`
  
  text.id = "popup_text"
  text.innerHTML = `Hello World!`
  
  map_link.id = "popup_map_link"
  map_link.setAttribute("class", "center image-fit") // styles
  map_link.href = map_string
  
  map.id = "popup_map"
  // map.setAttribute("class", "center image-fit")
  map.src = map_string
 
  body.appendChild(button)
  body.appendChild(popup)
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
