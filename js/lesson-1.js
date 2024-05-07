// "use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

/*==================================
======================================*/
// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

/*==================================
======================================*/
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

/*==================================
======================================*/
// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

/*======================================================*/
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

/*=====================================================*/
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// }

/*================================================*/
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");

/*===================================================*/

// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*====================================================*/
// Напишите цикл, который предлагает prompt ввести число,
// большее 100. Если посетитель ввёл другое число – попросить
// ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель
// не введёт число, большее 100, либо не нажмёт кнопку Отмена(ESC).

// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// console.log(num);

/*===========================================================*/
// Напишите код, который выводит все простые числа
// из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // Для всех i...

//   for (let j = 2; j < i; j++) {
//     // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log(i); // простое число
// }

/*====*/
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrimesInRange(n) {
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// const n = 20; // Можете изменить n на любое другое число
// printPrimesInRange(n);

/*=======================================*/
// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

/*====================================================*/
// При помощи цикла выведите числа от 5 до 10 в консоль.
// 5 и 10 включительно.Цикл можно использовать любой
// function firstTask() {
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
// }

// firstTask();

/*========================================*/
// При помощи цикла for вывести числа от 20 до 10 в консоль.
//  В обратном порядке(20, 19, 18...).
// Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
//   }
// }

// secondTask();

/*==========================================*/
// При помощи цикла for выведите чётные числа
// от 2 до 10 включительно

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// thirdTask();

/*==============================================*/

// Перепишите цикл  for на вариант с while.
// Результат должен остаться точно таким же.
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// fourthTask();

/*==========================================*/
// Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же,
// как и обращаться к ним: arr[0]

// function fifthTask() {
//   const arrayOfNumbers = [];
//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
//   }
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask();
/*=============================================*/
// Задача на формирование фигуры
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// function drawPyramid(height) {
//   for (let i = 1; i <= height; i++) {
//     let spaces = ' '.repeat(height - i);
//     let stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// const height = 6;
// drawPyramid(height);

/*============================================*/
// Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length,
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   console.log(result);
//   return result;
// }

// firstTask();

/*===========================================*/
// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
//  а если попадается строка - то к ней было добавлено
// " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40,
// 'Homework - done' ]

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется
//   //    автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} - done`;
//     }
//   }
//   console.log(data);
//   return data;
// }

// secondTask();
/*===========*/
// function secondTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   const newData = data.map(item => {
//     if (typeof item === 'number') {
//       return item * 2;
//     } else if (typeof item === 'string') {
//       return item + ' - done';
//     } else {
//       return item;
//     }
//   });

//   return newData;
// }

// console.log(secondTask());

/*========================================================*/
// Разверните массив data наоборот при помощи цикла и
//  запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
//   }
//   console.log(result);
//   return result;
// }

// thirdTask();

/*=====================================*/
