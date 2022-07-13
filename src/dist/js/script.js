const timer = function() {
    const displayTime = document.querySelector("#time")
    
    let date = new Date()
    
    displayTime.innerHTML = date.toLocaleTimeString()
}

setInterval(timer, 1000)