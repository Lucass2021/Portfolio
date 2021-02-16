function Relogio() {
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();

    var tempo_total = hr + ":" + min + ":" + s;
    var tempo = window.document.getElementById('relogio');
    tempo.innerHTML = tempo_total;
}
setInterval(Relogio, 500);