/*Знайти суму та кількість позитивних елементів.
Знайти максимальний елемент масиву та його порядковий номер.
Визначити кількість негативних елементів.
Знайти кількість непарних позитивних елементів.
Визначити кількість парних позитивних елементів.

Знайти суму парних позитивних елементів.
Знайти суму непарних позитивних елементів.

Знайти добуток позитивних елементів.*/

const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let maxElement = numbers[0];
let maxIndex = 0;
let sum = 0;
let positive = 0;
let negative = 0;
let product = 1;
let evenNumbers = 0;
let oddNumbers = 0;
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sum += numbers[i];
    positive++;
    product *= numbers[i];
    if (numbers[i] % 2 === 0) {
      evenNumbers++;
      evenSum += numbers[i];
    } else {
      oddNumbers++;
      oddSum += numbers[i];
    }
  } else if (numbers[i] < 0) {
    negative++;
  }

  if (numbers[i] > maxElement) {
    maxElement = numbers[i];
    maxIndex = i;
  }
}
alert(
  "Для масиву [ " +
    numbers +
    "] актуальні такі значення:" +
    "\n" +
    "Максимальний елемент: " +
    maxElement +
    "\n" +
    "Порядковий номер максимального елемента: " +
    maxIndex +
    "\n" +
    "Сума позитивних елементів: " +
    sum +
    "\n" +
    "Кількість позитивних елементів: " +
    positive +
    "\n" +
    "Кількість негативних елементів: " +
    negative +
    "\n" +
    "Добуток позитивних елементів: " +
    product +
    "\n" +
    "Кількість парних позитивних елементів: " +
    evenNumbers +
    "\n" +
    "Кількість непарних позитивних елементів: " +
    oddNumbers +
    "\n" +
    "Сума парних позитивних елементів: " +
    evenSum +
    "\n" +
    "Сума непарних позитивних елементів: " +
    oddSum
);
