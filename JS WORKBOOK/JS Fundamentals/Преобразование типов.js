//Строковое преобразование

let value=true;
console.log(typeof value);

value=String(value);
console.log(typeof value);


//Численное преобразование

console.log( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
console.log(typeof str); // string

let num = Number(str); // становится числом 123

console.log(typeof num); // number

let age = Number("Любая строка вместо числа");

console.log(age); // NaN, преобразование не удалось

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0


//Значение	Преобразуется в…
//undefined	NaN
//null	0
//true / false	1 / 0
//string	Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.


//Логическое преобразование

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("Привет!") ); // true
console.log( Boolean("") ); // false


console.log(a=3+4);