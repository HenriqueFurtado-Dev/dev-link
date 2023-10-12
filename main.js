function switchTheme() {
  var body = document.querySelector("body")
  var avatar = document.querySelector("#profile img")

  body.classList.toggle("light")
  if (body.classList.contains("light")) {
    avatar.src = "./assets/avatar-light.png"
  } else {
    avatar.src = "./assets/avatar.png"
  }
}