function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12; // example : 13:00 = 13 - 12 = 1 PM
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h; // if h < 10, example : 9, then write 09
  m = (m < 10) ? "0" + m : m; // same like h
  s = (s < 10) ? "0" + s : s; // same like h

  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerHTML = time;

  setTimeout(showTime, 1000);
}

showTime();