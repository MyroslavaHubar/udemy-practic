/* 1) Создайте функцию, которая будет вычислять 
объем и площадь полной поверхности куба (тоже базовая математика, 
    иногда используется в создании анимаций). Эта функция принимает 
    в себя целое число со значением длины ребра куба. 
    Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или 
вычислить значения невозможно - 
вернуть строку "При вычислении произошла ошибка" 
НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает 
и тесты будут ломаться. Это из-за того, 
что этот оператор из более нового стандарта, чем тут доступен.
*/

// function calculateVolumeAndArea(value) {
//   if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) {
//     return 'Error. Число не целое!';
//   }

//   let square = 0;
//   let volume = 0;

//   volume = value * value * value;
//   square = 6 * (value * value);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
// }

// console.log(calculateVolumeAndArea(5));

/* 
Напишите функцию, которая будет определять 
номер купе по переданному ей номеру места. 
Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - 
возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: 
"Таких мест в вагоне не существует"
*/

// function getCoupeNumber(value) {
//   if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   } else if (value === 0 || value > 36) {
//     return 'Таких мест в вагоне не существует';
//   } else {
//     return Math.ceil(value / 4);
//   }
// }

// console.log(getCoupeNumber(330));

/* Создайте функцию, которая принимает в себя целое число минут
 и возвращает время в нужном формате строки. (Смотри пример). 
 Обратите внимание на окончание слова "час" -
  оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, 
дробное или отрицательное число - функция возвращает строку 
"Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами 
(10 часов). Так как проверки на большие числа
 будут раздувать код (33 часа, 31 час, 11 часов и тд). 
 Этого будет достаточно и код будет проверять именно 
 этот промежуток (1 - 10 часов). Но вы можете реализовать 
 и полный скрипт, он тоже должен проходить тесты. 
 Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
 */

// function getTimeFromMinutes(minutesValue) {
//   if (
//     typeof minutesValue !== 'number' ||
//     minutesValue < 0 ||
//     !Number.isInteger(minutesValue)
//   ) {
//     return 'Ошибка, проверьте данные';
//   }

//   const hours = Math.floor(minutesValue / 60);
//   const minutes = minutesValue % 60;

//   let hoursString = '';

//   switch (hours) {
//     case 0:
//       hoursString = 'часов';
//       break;
//     case 1:
//       hoursString = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       hoursString = 'часa';
//       break;
//     default:
//       hoursString = 'часов';
//   }

//   return `Это ${hours} ${hoursString} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(150));

/*  Напишите функцию, которая принимает в себя 
4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом 
или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0 */

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== 'number' ||
//     typeof b !== 'number' ||
//     typeof c !== 'number' ||
//     typeof d !== 'number'
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// console.log(findMaxNumber(1, 5, 6.6, 11));

/* Задача с собеседований на числа Фибоначчи
Создайте функцию, которая будет принимать в себя один аргумент
-целое положительное число. Она должна возвращать строку, 
в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. 
Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"
 */

// function fib(value) {
//   if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) {
//     return '';
//   }

//   let result = '';
//   let firstValue = 0;
//   let secondValue = 1;

//   for (let i = 0; i < value; i++) {
//     if (i + 1 === value) {
//       result += `${firstValue}`;
//     } else {
//       result += `${firstValue} `;
//     }

//     let thirdValue = firstValue + secondValue;
//     firstValue = secondValue;
//     secondValue = thirdValue;
//   }
//   return result;
// }

// console.log(fib(4));

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
