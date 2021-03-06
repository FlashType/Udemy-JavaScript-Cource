"use strict";
//! Операторы

//! Унарный плюс. Унарным называется оператор, который применяется к одному операнду.Операнд – то, к чему применяется оператор.
//*console.log(4 + "5"); -нет унарного плюса
//todo [Running] 45
//*console.log(4 + +"5"); - унарный плюс,меняет тип данных операнды 5 на числовой. Не будет работать с операндами,которые чисами не являются.
//todo [Running] 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! ИНКРЕМЕНТ И ДЕКРЕМЕНТ

let incr = 10,
		decr = 10;
//!Примеры постфиксных Инкрементов и Дикрементов
	//*incr++
	//todo	console.log(incr) [Running] 11
	//*decr--
	//todo	console.log(incr) [Running] 9
//!Примеры префиксных Инкрементов и Дикрементов
	//*++incr
	//todo	console.log(incr) [Running] 11
	//*--decr
	//todo	console.log(incr) [Running] 9

//! Разница между постфиксныхми префиксными инкрементами в том,что если Постфиксный инкремент/декремент используется сразу в консоле,а не предварительно,как в премере выше, то посфиксная форма записи сначала возвращает значения к исходным, и лишь потом,со следующим применением к операнде начинает увеличивать/уменьшать её.
//*console.log(incr++);
//*console.log(decr--);
//todo [Running]  10 10
//! А вот префиксная начинает уменьшать/увелич операнду с ходу
//*console.log(++incr);
//*console.log(--decr);
//todo [Running]  11 9
//! Более наглядное применение ьулер рассмотренно в теме Циклов

/////////////////////////////////////////////////////////////////////////////

//! % оператор - возвращает целый остаток от деления
//*console.log(5%4);
//todo [Running] 1
//*console.log(5%2);
//todo [Running] 2
//*console.log(5%9); если делимое меньше чем делитель,то выводится только значение делимого числа
//todo [Running] 5
//*console.log(6%6);
//todo [Running] 0

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Операторы сравнения:
//! [&&] "И это и это",проверяет взаиморавенсво нескольких операнд
//*const apple = true,           									 			//*const apple = false,        												//*const apple = true,
//*				kiwi = false;            												//*			kiwi = false;          															//*kiwi = true;
//todo console.log(apple && kiwi) [Running] false      console.log(apple && kiwi) [Running] false         		console.log(apple && kiwi) true

//! [||] "Или это или то"
//*const apple = true, 
//*			kiwi = false;  
//todo console.log(apple ||  kiwi) [Running] true
//!	[!]  Оператор отрицания - меняет значения на противоположные
//*const apple = false,  
//*			kiwi = false; 
//todo  console.log(apple || !kiwi) [Running] true (т.к. kiwi - false стал true)


//! [=] - присваивание (не оператор сравнения)


//! [==] - сравнение по значению,но не по типу данных, например:
		//*console.log(5*2 == 10);(10-число)          console.log(5*2 == '10');(10 - строка)
//todo 						[Running] true                 			[Running] true
		
//! [===] - сравнение по типу данных
//*console.log(5*2 == 10);(10 - число),  console.log(5*2 == 15);(15 - не равен 5*2),  console.log(5*2 == '10');(10 - не число)
//todo [Running] true	                   [Running] false                               [Running] false