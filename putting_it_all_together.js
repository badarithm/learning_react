setInterval(logClockTime, 1000)

function logClockTime() {
    let time = getClockTime();
    console.clear();
    console.log(time);
}

function getClockTime(){
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };

    if(time.hours == 12){
        time.ampm = "PM";
    } else if (time.hours > 12){
        time.ampm = "PM";
        time.hours -= 12
   }
    if(10 > time.hours){
        time.hours = "0" + time.hours;
    }

    if(10 > time.seconds){
        time.seconds = "0" + time.seconds;
    }

    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)