document.getElementById('randomizeButton').addEventListener('click', function() {
    const inputWords = document.getElementById('inputWords').value;
  
    // Разделение введенных слов на массив
    const wordsArray = inputWords.split(/[\s ]+/).filter(word => word.trim() !== '');
  
    if (wordsArray.length === 0) {
        alert("Пожалуйста, введите хотя бы одно слово.");
        return;
    }
  
    // Генерация случайного индекса
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
  
    // Отображение результата
    document.getElementById('result').innerText = `Случайное слово: ${wordsArray[randomIndex]}`;
  });