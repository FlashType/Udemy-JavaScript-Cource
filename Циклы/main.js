"use strict";


//! Цикл [while] будет выполнять дейсвие запианное в {},пока не будет выполненно условие. В данном цикле сначала проверяется условие,а потом выполняется действие.
let num = 50;
while (num < 55){ 
	console.log(num);
	num++;
}
//!Цикл [do] сначала выполняетя действие, а потом выполняется условие
let num2 = 55;
do{
console.log(num2);
num2++;
}
while( num2 <= 60 );
//!Цикл [for] включает 3 переменные :1)переменная 'i'(itenator);2)условие при котором цикл остановит работу;3)шаг цикла(что он делает )

let num3 = 30;
for(let i = 3; i < 15; i++){
	console.log(num3);
	num3--;
}//! В данном цикле  в консоль выведутся значения от 30 до 41 (11 тактов). Т.к. точка отсчёта у нас не 0 а 3(i = 3), и значения num3 будут увеличиваться на 1 столько, сколько  циклов необходимо, чтобы i < 15 (без знака равенсва) и т.к. i = 3, то необходимо 11 циклов.


//!Цикл можно закончить досрочно при помощи оператора [break]
for(let i = 1; i < 15; i++){
	if (i===6){
		// break;
		continue;
	}
	console.log(i);
}
//!Оператор [continue] позволяет пропустить указанный в условии шаг, не прерывая цикл