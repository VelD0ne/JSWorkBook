let now = new Date();
console.log( now ); // shows current date/time



// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );


let date = new Date("2017-01-26");
console.log(date);

//new Date(year, month, date, hours, minutes, seconds, ms)


new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default


let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date ); // 1.01.2011, 02:03:04.567


// current date
let date = new Date();

// the hour in your current time zone
console.log( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
console.log( date.getUTCHours() );


// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log( new Date().getTimezoneOffset() );



// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)


let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...is 1st Feb 2013!


let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); // 1 Mar 2016


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log( date ); // shows the correct date

let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
console.log( date );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log( date ); // 31 Dec 2015


let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log( `The loop took ${end - start} ms` );


let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates



// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.


let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)



let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(date);
