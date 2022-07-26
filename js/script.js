// Задание №1
const city = 'Название города (Шымкент)';
const countryCity = 'В какой стране находится этот город (Казахстан)';
const populationCity = 'Численность населения:' + ' ' + '2.3млн';
const boolean = 'Есть ли футбольный стадион:' + ' ' + 'true(Да)';

console.log(city);
console.log(countryCity);
console.log(populationCity);
console.log(boolean);


// Задание №2
let a = 40;
let b = 70;
if (a, b) {
   var multiplication = a * b;
   console.log(multiplication);
}


// Задание №3
time = 2;
speedOfFirst = 95;
speedOfSecond = 114;
if (time, speedOfFirst, speedOfSecond) {
   var Distance = (speedOfFirst * time) + (speedOfSecond * time);
   console.log(Distance);
}


//Задание №4
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
   console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
   console.log("randomNumber больше 50");
} else {
   console.log("randomNumber больше 20, и меньше 50");
}


//Задание №5
const randomNumber2 = Math.floor(Math.random() * 100);

switch (true) {
   case randomNumber2 < 20:
      console.log("randomNumber2 меньше 20");
      break;
   case randomNumber2 > 50:
      console.log("randomNumber2 больше 50");
      break;
   default:
      console.log("randomNumber2 больше 20, и меньше 50");
      break;
};