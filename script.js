'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
	timeData: time,        
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
		q2 = prompt("Во сколько обойдётся?", "");

	if ( (typeof(q1))=== 'string' && (typeof(q1)) != null && (typeof(q2)) != null
		&& q1 != "" && q2 != "" && q1.length < 50) {
		console.log("done");
		appData.expenses[q1] = q2;
	} else {
		console.log ("bad result");
		i--;
	}
};


// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = prompt("Во сколько обойдётся?", "");

//     if ( (typeof(q1))=== 'string' && (typeof(q1)) != null && (typeof(q2)) != null
// 	   && q1 != "" && q2 != "" && q1.length < 50) {
//         console.log ("done");
//         appData.expenses[q1] = q2;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// };


// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = prompt("Во сколько обойдётся?", "");

//     if ( (typeof(q1))=== 'string' && (typeof(q1)) != null && (typeof(q2)) != null
//	   && q1 != "" && q2 != "" && q1.length < 50) {
//         console.log ("done");
//         appData.expenses[q1] = q2;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}