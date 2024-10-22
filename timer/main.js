document.getElementById('startButton').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput').value;
    let timeRemaining = parseInt(timeInput);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Пожалуйста, введите корректное количество минут.");
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');

    timerDisplay.innerText = `Осталось времени: ${timeRemaining} минут`;

    const countdown = setInterval(function() {
        timeRemaining--;
        timerDisplay.innerText = `Осталось времени: ${timeRemaining} минут`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Время вышло!";
        }
    }, 60000);
});