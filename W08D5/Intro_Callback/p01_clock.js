class Clock {
  constructor(hours, minutes, seconds, speed) {
    
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    // 3. Call printTime.

    // this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    let current = this;
    setInterval(function(){ console.log(current); current._tick(); }, speed);
    
  }
  
  printTime() {
    // Use an ifelse to check if hours, minutes, or seconds is > 10. 
    // If so, do nothing. Else, add 0
    console.log(`${this.hours} :${this.minutes} : ${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
      // add 1 second. If second or minute =60, add 1 to the next. If hour > 24, set to 0
      // console.log(this);
    if (this.seconds++ >= 60){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes >= 60){
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours >= 24) {
      this.hours = 0;
      // this.day; // get day somewhere
    }
    // 2. Call printTime.
    this.printTime();
  }
}
const date = new Date();
const clock = new Clock(date.getHours(),date.getMinutes(),date.getSeconds(), 1000);
// Schedule Clock.prototype._tick callback that updates the time and calls printTime method
