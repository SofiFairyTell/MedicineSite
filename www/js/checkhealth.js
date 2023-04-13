function updateText() {
    const now = new Date();
    const currentHour  = now.getHours();
    const message = `Записывайтесь на бесплатную консультацию!`;
    let dopMessage = "";
    if (currentHour < 14) {
      var hoursLeft = 14 - currentHour;
      dopMessage = "До начала записи осталось " + hoursLeft + " часов";
    } else if (currentHour >= 14 && currentHour < 18) {
      var hoursLeft = 18 - currentHour;
      dopMessage = "До конца записи осталось " + hoursLeft + " часов";
    } else {
      var hoursLeft = 24 - currentHour +14;
      var min = now.getMinutes();
      dopMessage = `Запись окончена. Следующая запись через: ${hoursLeft} часов и ${min} мин.`;
    }

    const text = `${message} ${dopMessage}`;
    const marqueeElement = document.querySelector('marquee');
    marqueeElement.innerText = text;
  }
  
  // Обновляем текст каждую минуту
  setInterval(updateText, 1000);
  