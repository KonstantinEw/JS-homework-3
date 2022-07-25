"use strict";

//1

let varBool = 'true';
let varBoolFalse = false;
let varNum = 17;
let varUndef;
let varNull = null;

console.log(typeof varUndef);
console.log(typeof varBool);
console.log(typeof varBoolFalse);
console.log(typeof varNull);
console.log(typeof varNum);

//2

let height = 15;
let width = 20;

if(width>height) {
    console.log (width);
};

//3

for(let i = 1; i++;) {
    if (i % 3 ===0 )
        console.log(i);
    else if (i >= 20)
    break;
};

//4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen && (apple || orange));

console.log (shouldGoToWork);

//5


    let num = prompt('Введите число:', '');
    if (num % 5 === 0) {
        alert('Fiz');
    } else if (num % 3 === 0) {
        alert('Buz');
    } else if (num % 3 === 0 && num % 5 === 0) {
        alert('FizBuz');
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        alert('Неверное число');
    }; 

//6

let age = prompt('Введите ваш возраст:');
if (age > 18) {
    alert('Попей пивка');
} else if ((age <= 18) && (age == 16 || age == 17 || age == 18)) {
    alert('Пей колу');
    alert('Можешь выкурить сигаретку, только маме не говори')
} else (alert('Пей колу'));

//7

let side = prompt('Куда вы хотели бы отправится?')

switch (side) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь')
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь')
        break
    case 'запад':
        alert('на запад пойдешь верного друга найдешь')
        break
    case 'восток':
        alert('на восток пойдешь разработчиком станешь')
        break
    default:
        alert('Тур не предусмотрен')
};

8
let userName = 'пОлИнА нАбЕрЕжНаЯ'
let userNameSecond = prompt('Enter your name:', userName);
if (userName == 'пОлИнА нАбЕрЕжНаЯ') {
    alert('Привет, Полина Набережная!');
} else (alert('Нет такого пользователя'));

// let userNameAlert = userName[0].toUpperCase()+userName.slice(0);
// alert('Привет,'+' '+userNameAlert+'!');

//9

let userNumber = prompt('Введите число:', '');
let userMinus = prompt ('Сколько отнять?', '');
let userPlus = prompt ('Сколько прибавить?', '');
let userMultiplication = prompt ('На сколько умножить?', '');
let userDivision = prompt ('На сколько разделить?', '');

let result = ((userNumber-userMinus+userPlus)*userMultiplication/userDivision);

alert(`((((${userNumber} - ${userMinus}) + ${userPlus}) * ${userMultiplication}) / ${userDivision} = ${result})`);

//10

let userStr = '#';

while(userStr.length<=6) {
    console.log(userStr)
    userStr += '#'
}
