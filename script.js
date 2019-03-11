"use strict";

var money;
var time;
var answer;



var appData = {budjet: money, date: time, expenses : {qwest: answer}, optionalExpenses:{},
income: [], savings: false };

money = prompt('Ваш бюджет на месяц?', 60000);  

time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

appData.expenses.qwest = prompt('Введите обязательную статью расходов в этом месяце ', 'Дети');

appData.expenses.answer = prompt('Во сколько обойдется? ', '20000');

console.log(money, appData.expenses.qwest, appData.expenses.answer);

alert('Ваш бюджет на 1 день ' + money/30 + 'рублей');



