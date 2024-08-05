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

/* Числа Фибоначчи рекурсивны по определению */
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fibonacciSeries(value) {
//   if (value <= 0) return '';
//   if (value === 1) return '0';
//   if (value === 2) return '0 0';

//   let fibNumber = [0, 0, 1];
//   for (let i = 3; i < value; i++) {
//     let nextNumber = fibNumber[i - 1] + fibNumber[i - 2];
//     fibNumber.push(nextNumber);
//   }
//   return fibNumber.slice(0, value).join(' ');
// }

// console.log(fibonacciSeries(7));

/*=========*/

// function fibonacciSeries2(value) {
//   if (value <= 0) return '';
//   if (value === 1) return '1';
//   if (value === 2) return '1 1';

//   let fibNumber = [1, 1];
//   for (let i = 2; i < value; i++) {
//     let nextNumber = fibNumber[i - 1] + fibNumber[i - 2];
//     fibNumber.push(nextNumber);
//   }
//   return fibNumber.slice(0, value).join(' ');
// }

// console.log(fibonacciSeries2(7));

/*=========*/
// У вас есть готовый объект с данными.
// Разработчик Х хочет написать часть функционала,
//   но ему не хватает навыков.Выполните часть заданий за него.
// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function (lang) {
//       str += `${lang.toUpperCase()} `;
//     });

//     return str;
//   },
// };

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   return exp;
// }

// console.log(showExperience(personalPlanPeter));

// Напишите функцию showProgrammingLangs, которая будет принимать в себя
// объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков.
// Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// function showProgrammingLangs(plan) {
//   let str = '';
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }

//   return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
// При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта,
//   а языки всегда в верхнем регистре(большими буквами).Если данные в объекте поменяются,
//     то и сообщение тоже изменится.

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//=======================================================================================//

// 1) Напишите функцию showFamily, которая будет принимать
// в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива.Если массив пустой,
//   то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя
// массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя
// нам могут прийти ответы в самых разных форматах.В том числе
// и с разными буквами:) Поэтому нам нужно привести строки в один формат для правильной работы.

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';

//   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//   arr.forEach(user => {
//     str += `${user} `;
//   });

//   return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//   arr.forEach(city => {
//     console.log(city.toLowerCase());
//   });

// }

// standardizeStrings(favoriteCities)

//=======================================================================================//
// Задача с собеседований.Напишите функцию reverse,
//   которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке.
// Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== 'string') {
//     return 'Ошибка!';
//   }

//   return str.split('').reverse().join('');
// }

// console.log(reverse(someString));

//========================================================================================//

// Представьте такую реальную ситуацию.
// У вас есть банкомат, который выдает деньги из двух разных банков
// в разных валютах.Один банк основной с базовыми валютами,
//   второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr,
//   которая принимает два аргумента: первый - это массив со всеми
//   доступными валютами из двух банков сразу(сейчас представим,
//     что они не могут повторяться), второй - необязательный аргумент,
//   который указывает ту валюту, которая сейчас закончилась в банкомате.
//       Если массив в первом аргументе пустой - то функция возвращает
//       строку 'Нет доступных валют'.Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

//   - После валюты: стоит перенос строки \n, и после каждой валюты тоже.
// Это важно для тестов

//   - Данные для первого аргумента должны приходить сразу из двух банков,
//     причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const atm = baseCurrencies.concat(additionalCurrencies);

// function availableCurr(arr, missingCurr) {
//   let str = '';

//   arr.length === 0
// ? (str = 'Нет доступных валют')
//     : (str = 'Доступные валюты:\n');

//   arr.forEach(curr => {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });

//   return str;
// }

// console.log(availableCurr(atm, 'CNY'));
