console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  // Визначаємо перший проміс з іменем promise1
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }

  // Визначаємо другий проміс з іменем promise2
  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 1000);
    });
  }

  // Використовуємо Promise.all, щоб вирішити обидва проміси одночасно
  Promise.all([promise1(), promise2()])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error("Помилка:", error);
    })
    .finally(() => {
      console.log("Всі операції завершено");
    });
}

// Викликаємо функцію task4
task4();
