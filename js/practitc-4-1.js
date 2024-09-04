// Задача:

// У вас есть небольшой кусочек данных о торговом центре,
//     которые записаны в объекте shoppingMallData.
//     Они содержат массив с данными о магазинах, где указана длина и ширина помещения;
//     высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
//  Если бюджета хватает для отопления всего объема торгового центра -
//     выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов,
//     которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра,
//     так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов,
//     высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let square = 0;

//   data.shops.forEach(shop => {
//     square += shop.width * shop.height;
//   });

//   const volume = data.height * square;

//   const allMoney = volume * data.moneyPer1m3;

//   return allMoney <= data.budget
//     ? 'Бюджета достаточно'
//     : 'Бюджета недостаточно';
// }

// console.log(isBudgetEnough(shoppingMallData));

//==============================================================================//
// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека.
// Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту.
// Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами.Как итог, функция возвращает новый массив
// с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// const students = [
//   'Peter',
//   'Andrew',
//   'Ann',
//   'Mark',
//   'Josh',
//   'Sandra',
//   'Cris',
//   'Bernard',
//   'Takesi',
//   'Sam',
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const first = [],
//     second = [],
//     third = [],
//     other = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       first.push(arr[i]);
//     } else if (i < 6) {
//       second.push(arr[i]);
//     } else if (i < 9) {
//       third.push(arr[i]);
//     } else {
//       other.push(arr[i]);
//     }
//   }

//   return [
//     first,
//     second,
//     third,
//     `Оставшиеся студенты: ${other.length === 0 ? '-' : other.join(', ')}`,
//   ];
// }

// console.log(sortStudentsByGroups(students));

// function sortStudentsByGroups(arr) {
//   const sortedArr = arr.slice().sort();

//   const groups = [
//     sortedArr.slice(0, 3),
//     sortedArr.slice(3, 6),
//     sortedArr.slice(6, 9),
//   ];

//   const other = sortedArr.slice(9);

//   groups.push(`Оставшиеся студенты: ${other.length ? other.join(', ') : '-'}`);

//   return groups;
// }

// const num = [1, 5, 12, 4, 6, 78, 34, 23, 456, 91, 95];
// const newNum = num.slice().sort((a, b) => a - b);
// console.log(newNum);
