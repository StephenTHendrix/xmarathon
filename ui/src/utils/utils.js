/* Take an integer of seconds and output formatted string 00:00:00 */
export function formatTime(seconds) {
  let hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * 60 * 60;

  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

/* take an integer of seconds and return integer of minutes */
export function timeToMinutes(seconds) {
  return Math.floor(seconds / 60);
}

export function timeToInterval(seconds, interval) {
  return Math.floor(seconds / interval);
}

export function xPos(d, gpr, w, csp) {
  return d.per_minute * (w + csp);
}

export function yPos(d, timeScale) {
  return timeScale(timeToMinutes(d.time));
}
