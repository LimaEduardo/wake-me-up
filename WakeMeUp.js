var exec = require('child_process').exec
var child

var musicLink = "https://youtu.be/co6WMzDOh1o"

var wakeUpTime = {
  hour: process.argv[2].split(':')[0],
  minutes: process.argv[2].split(':')[1]
}

var verifyHour = setInterval(function() {
   let date = new Date()
   if(wakeUpTime.hour == date.getHours() && wakeUpTime.minutes == date.getMinutes()){
    child = exec(`google-chrome ${musicLink}`, (err, stdout, stderr) => {
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
      if (err != null) {
        console.log(`exec error: `+ err)
      }
    });
    clearInterval(verifyHour)
   }
}, 1000);