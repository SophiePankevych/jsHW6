// - создать массив с 20 числами.
// let array = [1222, 22, 3124, 1234, 5, 2222, 7, 333, 9, 778655, 11, 12, 1365756, 4, 15675675, 16, 15677, 8, 56719, 20];

// -- при помощи метода sort и колбека  отсортировать массив.
// let sortedArray = array.sort((a, b) => a - b);
// console.log(sortedArray);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort = array.sort((a, b) => b - a);
// console.log(sort);

// -- при помощи filter получить числа кратные 3
// let filter = array.filter((a) => a % 3 === 0);
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filter = array.filter(a => a % 10 === 0);
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// let foreach = array.forEach(a => console.log(a));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = array.map(a => a*3);
// console.log(map);

// - создать массив со словами на 15-20 элементов.
// let array = ['asdvsdv', 'ew', 'wdvdvdvde', 'svdvva', 'gvdvgf', 'ddf', 'dd', 'idu', 'hjj', 'dddyy', 'rtdy', 'iuy', 'mju', 'juy', 'jmn'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let sort = array.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
// });
// console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort = array.sort((a, b) => {
//     if (a > b) {
//         return -1
//     }
// });
// console.log(sort);

// -- отфильтровать слова длиной менее 4х символов
// let filter = array.filter(a => a.length < 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = array.map(a => `${a}!`);
// console.log(map);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let toOlder = users.sort((a, b) => a.age - b.age);
// console.log(toOlder);
// let toYounger = users.sort((a, b) => b.age - a.age);
// console.log(toYounger);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let toBigger = users.sort((a, b) => a.name.length - b.name.length);
// console.log(toBigger);
// let toSmaller = users.sort((a, b) => b.name.length - a.name.length);
// console.log(toSmaller);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let id = users.map((value, index) => {
//     value.id = index;
//     return value
// });
// console.log(id);

// - відсортувати його за ідентифікатором
// let map = users.map((value, index) => {
//     value.id = Math.floor(Math.random()*index);
//     return value
// });
// console.log(map);
// let sort = map.sort((a, b) => a.id - b.id);
// console.log(sort);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a, b, callback) {
// return callback(a, b)
// }
// console.log(calculate(40, 2, (a, b) => a + b));

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculate(a, b, c, callback) {
// return callback(a, b, c)
// }
// console.log(calculate(5, 10, 20, (a, b, c) => c - b + a));
// console.log(calculate(100, 500, 2, (a, b, c) => b / c - a));
// console.log(calculate(100000, 5, 1000, (a, b, c) => a / c * b));
