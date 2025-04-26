function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Pad single digits with a 0
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = currentTime;
  }
  
  // Initial call
  updateClock();
  
  // Update every second
  setInterval(updateClock, 1000);
  