const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

function changeColor() {
// 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
// 2. Use that color to update the background color of the body.
   return fetch('https://apis.scrimba.com/hexcolors/?count=1')
   .then(response => response.json())
   .then(data => body.style.backgroundColor = data.colors[0].value)
   .catch(error => console.log(error));
}
