function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    
    // Display time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeEl.textContent = timeString;
    
    // Display date
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${day}-${month}-${year}`;
    dateEl.textContent = dateString;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);

// canada Timing 
  function updateTime2() {
    const now = new Date().toLocaleString("en-US", {timeZone: "America/Toronto"});
    const timeEl = document.getElementById('Ca_time');
    const dateEl = document.getElementById('Ca_date');
    
    // Display time
    const timeString = now.slice(-11, -3);
    timeEl.textContent = timeString;
    
    // Display date
    const dateString = now.slice(0, 10);
    dateEl.textContent = dateString;
  }
  
  // Update time every second
  setInterval(updateTime2, 1000);
  