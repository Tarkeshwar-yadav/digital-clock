function updateClock() {
    let now = new Date();
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    var ampm = "AM";
  
    if (hours >= 12) {
      ampm = "PM";
    }
  
    if (hours == 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
    }
  
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    let time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").textContent = time;


  
     // Add weekday
     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var dayName = days[now.getDay()];
  
  
    // Date part
    let day = now.getDate();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear();
  
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }


  
  
    var fullDate = dayName + ", " + day + "/" + month + "/" + year;
    document.getElementById("date").textContent = fullDate;
  }
  
  updateClock(); // Run once
  setInterval(updateClock, 1000); // Run every second
  




//   a shorter version
// function updateClock() {
//     const now = new Date();
  
//     let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
//     let ampm = h >= 12 ? "PM" : "AM";
//     h = h % 12 || 12;
  
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
  
//     document.getElementById("clock").textContent = `${h}:${m}:${s} ${ampm}`;
  
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let d = now.getDate(), mo = now.getMonth() + 1, y = now.getFullYear();
//     d = d < 10 ? "0" + d : d;
//     mo = mo < 10 ? "0" + mo : mo;
  
//     document.getElementById("date").textContent = `${days[now.getDay()]}, ${d}/${mo}/${y}`;
//   }
  
//   updateClock();
//   setInterval(updateClock, 1000);
  