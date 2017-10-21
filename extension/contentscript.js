console.log("opened content script");
button = document.createElement('button')
button.appendChild(document.createTextNode("Click Me"))
button.onclick(() => alert("CLICKED!"))
document.body.appendChild(button)
