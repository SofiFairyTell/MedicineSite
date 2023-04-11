function updateText() {
    const now = new Date();
    const minutes = now.getMinutes();
    const message = minutes < 53 ? `До проверки здоровья 7 дней` : "";
    const text = `${message} и ${minutes} минут`;
    const marqueeElement = document.querySelector('marquee');
    marqueeElement.innerText = text;
  }
  
  // Обновляем текст каждую минуту
  setInterval(updateText, 60000);
  