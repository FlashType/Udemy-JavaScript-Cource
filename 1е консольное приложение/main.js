//!Задание
/*1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
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


//* Option - 1
let numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let a = prompt("Один из последних просмотренных фильмов?", ""),
	b = prompt("На сколько вы его оцените?", ""),
	c = prompt("Один из последних просмотренных фильмов?", "");
    d = prompt("На сколько вы его оцените?", "");

const personalMovieDB = {

	count: numberofFilms,
	movies: {
	},
	actors: {},
	genres: [],
	privat: false,
}
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;//! В данном случае в объект movies помещаем переменную для этого объекта, имя которой будет являться ответом пользователя на ранее заданный вопрос "Один из последних просмотренных фильмов?" Стоит заметить что эта переменная не берётся в ковычки! А я сначала брал,и делал из переменной обычный строчный элемент. а значение переменной присваивается через знак присваивания [=].
console.log(personalMovieDB);
