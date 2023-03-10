'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

const numbersOfQuestion = 2;

function rememberMyFilms () {
    for (let i = 0; i < numbersOfQuestion; i++) {
        for (let i = 0; i < 1; i++) {
            const lastFilm = prompt('Один из последних посмотренных фильмов?'),
                  lastFilmRating = prompt('На сколько оцените его?');
    
            if (lastFilm != null && lastFilm.length < 50 && lastFilm != '' && lastFilmRating != null && lastFilmRating.length < 50 && lastFilmRating != '' ) {
                personalMovieDB.movies[lastFilm] = lastFilmRating;
                console.log('Done!');
            } else {
                console.log('Error!');
                i--;
            }
        };
    };
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы киноман");
    } else if (personalMovieDB.count >= 30  ) {
         alert("Вы классический зритель");
    } else {
        alert("Произошла ошибка");
    }
    
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {

    for ( let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);