// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let x = 0;
while (x < 101) {
	console.log(x);
	x += 1;
}
// 2. С этого урока начинаем работать с функционалом интернет-магазина.
 // Предположим, есть сущность корзины.
 // Нужно реализовать функционал подсчета стоимости корзины в зависимости от
  // находящихся в ней товаров.

let z = {price_1 : 208, price_2 : 102, price_3 : 34};
console.log(Object.values(z));
let sum_values = 0
for (let value of Object.values(z)) {
	sum_values += value;
}
console.log(sum_values)

// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
let basket_1 = {price_1 : 208, price_2 : 102, price_3 : 34};
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice (basket) {
	let sum_values_1 = 0;
	for (let value of Object.values(basket)) {
	sum_values_1 += value;
    }
    return console.log(sum_values_1)
}
countBasketPrice(basket_1)
// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
 // Выглядеть это должно так:

 for (let x = 1; x <= 10; console.log(x++)){

 } ;