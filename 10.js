console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, який вирішується через 500мс і повертає рядок "Promise 1".
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });

  // Створюємо проміс promise2, який вирішується через 200мс і повертає рядок "Promise 2".
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });

  // Створюємо проміс promise3, який вирішується через 300мс і повертає рядок "Promise 3".
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });

  // Використовуємо Promise.any() для отримання результату першого виконаного промісу з масиву
  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      // Якщо проміс виконаний успішно, виводимо в консоль дані, які він повертає
      console.log("Результат:", result);
    })
    .catch((error) => {
      // Якщо всі проміси відхилені, виводимо в консоль помилку
      console.error("Помилка:", error);
    });
}

// Викликаємо функцію task10
task10();
