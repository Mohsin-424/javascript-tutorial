// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".


// Introduce a function with both parameters

 function Guess( a , b ) {
if ( a == b ) {
    console.log('Good Luck!');
} else {
    console.log('The numer has  not matched');
}

}
// for ( let num = 0 ; num < 10 ; num++ ) {
//     a = (Math.random()*10);
//     b = prompt('Guess any number');
//     Guess( a , b );
// }
    a = Math.floor((Math.random()*2));
    // console.log(a);
    b = prompt('Guess any number');
    Guess( a , b );
