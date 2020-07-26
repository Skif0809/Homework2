'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
        budget: money,
	    timeData: time,        
	    expenses: {},
	    optionalExpenses: {},
	    income: [],
	    savings: false
};

let Question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	Question2 = prompt("Во сколько обойдется?", ''),
	Question3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	Question4 = prompt("Во сколько обойдется?", '');

appData.expenses.Question1 = Question2;
appData.expenses.Question3 = Question4;

alert(appData.budget / 30);