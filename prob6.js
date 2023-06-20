
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
// Leap year come after every 4 years
// Leap year has following  conditions
// an year divisilb  by 400
// an year divisible by 4 but not by 100 otherwise o leap yar can be found


function Determine(year) {
    if (year % 4 === 0) {
        console.log('Leap year');
    }
       
    else {
        console.log('Not a leap year')
    }
}
 let year =window.prompt('');
Determine (year);
