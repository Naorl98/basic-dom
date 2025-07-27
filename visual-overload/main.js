const container = document.getElementById("container")

for (let i = 0; i < 50; i++) {
  const box = document.createElement("div")  
  box.classList.add("box")                   

  box.onmouseenter = function () {
    box.style.backgroundColor = getRandomColor()
  }

  container.appendChild(box) 
}

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
