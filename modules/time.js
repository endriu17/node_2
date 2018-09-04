var os = require('os');

module.exports = function (times) {

    // var times = os.uptime(); // to zostawiłem żebyś widział że działa
    var timeH = Math.floor(times / 3600);
    var timeMin = Math.floor((times - (timeH * 3600)) / 60);
    var timeSek = Math.floor(times - (timeH * 3600) - (timeMin * 60));
    if (times <= 3599) {
        return 'Uptime is ' + timeMin + ' min. ' + timeSek + ' sek.';
    } else if (times >= 3600) {
        return 'Uptime is ' + timeH + ' h ' + timeMin + ' min. ' + timeSek + ' sek.';
    }

}
