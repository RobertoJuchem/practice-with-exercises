window.onload = function () {
    ////window.onload - aciona o evento desejado quando o carregamento da página está completo
    let seconds = 00
    let miliSeconds = 00
    let minutes = 00
    let addMiliSeconds = document.getElementById('miliSeconds')
    let addSeconds = document.getElementById('seconds')
    let addMinutes = document.getElementById('minutes')
    let buttonStart = document.getElementById('button-start')
    let buttonPause = document.getElementById('button-pause')
    let buttonReset = document.getElementById('button-reset')
    let timeInterval

    buttonStart.onclick = function() {
        clearInterval(timeInterval)
        timeInterval = setInterval(startTimer, 10)
        ////setInterval() função temporizadora,
        ////executa infinitamente no intervalo de tempo definido, até chamar o clearInterval()
        ////clearInterval() limpa o timer, desativa a função setInterval()
    }

    buttonPause.onclick = function() {
        clearInterval(timeInterval)
    }

    buttonReset.onclick = function () {
        clearInterval(timeInterval)
        miliSeconds = "00"
        seconds = "00"
        minutes = "00"
        addMiliSeconds.innerHTML = miliSeconds
        addSeconds.innerHTML = seconds
        addMinutes.innerHTML = minutes
    }

    function startTimer () {
        miliSeconds++

        if (miliSeconds <= 9) {
            addMiliSeconds.innerHTML = '0' + miliSeconds
        } if (miliSeconds > 9) {
            addMiliSeconds.innerHTML = miliSeconds
        } if (miliSeconds > 59.99) {
            seconds++
            addSeconds.innerHTML = '0' + seconds
            miliSeconds = 0
            addMiliSeconds.innerHTML = '0' + 0
        } if (seconds > 9) {
            addSeconds.innerHTML = seconds
        } if (seconds > 59.99) {
            minutes++
            addMinutes.innerHTML = '0' + minutes
            seconds = 0
            addSeconds.innerHTML = '0' + 0
        }
    }
}