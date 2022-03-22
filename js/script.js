"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его',''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его','');

// personalMovieDB.movies[a] = b,
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// далее оптимизировали с помощью цикла


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его','');
    //чтобы пользователь не смог ввести пустую строку или отменить ввод и ввести название не длинее чем 50 символов..и вернулся обратно
    if (a != null && b != null && a!= '' && b!= '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;

    }
}

//Один из вариантов применения циклов
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его','');
//     i++;
// if (a != null && b != null && a!= '' && b!= '' && a.length < 50) {
    //  personalMovieDB.movies[a] = b;
    //  console.log('done');
    //} else {
    //     console.log('error');
    //     i--;
// }

// console.log(personalMovieDB);

//выводим сообщения по количеству фильмов
if (personalMovieDB.count < 10) { 
    alert ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

console.log(personalMovieDB);

