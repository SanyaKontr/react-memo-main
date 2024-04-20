// Модуль для изменения окончания слов

export const attemptForms = ["попытка", "попытки", "попыток"];

export const wordEndingChanger = (function () {
  // Вспомогательная функция для определения окончания в зависимости от числа
  function getEnding(number, endings) {
    // Приводим число к положительному значению
    number = Math.abs(number);

    // Исключаем числа от 11 до 19, так как для них окончание всегда будет "-ок"/
    number %= 100;
    if (number >= 11 && number <= 19) {
      return endings[2];
    }

    // Определяем последнюю цифру числа
    const lastDigit = number % 10;

    // В зависимости от последней цифры определяем окончание
    switch (lastDigit) {
      case 1:
        return endings[0];
      case 2:
      case 3:
      case 4:
        return endings[1];
      default:
        return endings[2];
    }
  }

  // Основная функция для изменения окончания слова
  function changeEnding(number, wordForms) {
    // Получаем окончание с использованием вспомогательной функции
    const ending = getEnding(number, wordForms);
    // Формируем строку с окончанием и пробелом перед словом
    return " " + ending;
  }

  // Экспортируемая часть модуля
  return {
    changeEnding: changeEnding,
  };
})();

// Функция для преобразования секунд в формат чч:мм
export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else if (minutes > 0) {
    return `${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `00:${formattedSeconds}`;
  }
}
