function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US');
    const date = now.toLocaleDateString('en-US');
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}
setInterval(updateDateTime, 1000);
updateDateTime();