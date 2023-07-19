console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  function fetchWithError() {
    // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
    const errorMessage = "Помилка при з'єднанні з сервером";
    // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу з повідомленням про помилку
    return Promise.reject(errorMessage);
  }

  // Викликаємо функцію fetchWithError
  fetchWithError()
    .then((data) => {
      // Якщо проміс виконаний успішно, виводимо в консоль дані, які він повертає
      console.log("Отримані дані:", data);
    })
    .catch((error) => {
      // Якщо проміс виконаний з помилкою, виводимо в консоль помилку
      console.error("Помилка:", error);
    });
}

// Викликаємо функцію task10
task9();
