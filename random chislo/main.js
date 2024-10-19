document.getElementById('generate_btn').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min_value').value);
    const max = parseInt(document.getElementById('max_value').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById('output').innerText = 'Пожалуйста, введите корректные значения.';
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('output').innerText = `Случайное число: ${randomNum}`;
});