function updateClock() {
    var now = new Date(), time = now.getHours() + ':';
    if(now.getMinutes() < 10) time += '0';
    time += now.getMinutes();
    document.getElementById('timp').innerHTML = time;
    setTimeout(updateClock, 1000);
}
updateClock();