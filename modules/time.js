var os = require('os');

function getUPTime(times) {

    var times = os.uptime();
    var timeH = Math.floor(times / 3600);
    var timeMin = Math.floor((times - (timeH * 3600)) / 60);
    var timeSek = Math.floor(times - (timeH * 3600) - (timeMin * 60));
    if (times <= 3599) {
        console.log('Uptime is ' + timeMin + ' min. ' + timeSek + ' sek.');
    } else if (times >= 3600) {
        console.log('Uptime is ' + timeH + ' h ' + timeMin + ' min. ' + timeSek + ' sek.');
    }

}

// getUPTime();
module.exports = getUPTime;