function addScrollButton() {
  // elements
  var target = document.querySelector("footer"), // target the footer
      scroll_button = document.createElement("button"), // create a scroll to top button
      rootElement = document.documentElement // and the root element, for scrolling
  // the callback for intersection observers
  function callback(entries, observer) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Show button
        scroll_button.classList.add('scroll-to-top-show')
      } else {
        // Hide button
        scroll_button.classList.remove('scroll-to-top-show')
      }
    });
  }
  // create the intersection observer
  let observer = new IntersectionObserver(callback)
  observer.observe(target);

  // the scroll to top function
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scroll_button.addEventListener("click", scrollToTop)
  scroll_button.innerHTML = "↑"
  scroll_button.classList.add("scroll-to-top")
  // scroll_button.classList.add("w3-button")
  document.querySelector("body").appendChild(scroll_button)
}

document.addEventListener("DOMContentLoaded", function(event) {
  addScrollButton()
})
