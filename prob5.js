// 5. Write a JavaScript program to rotate the string 'electrical' in the right direction. This is done by periodically removing one letter
//  from the string end and attaching it to the front.
// Stesps

// 1.define the string = 'electrical';
// 2. use function in whichh paramete should be 'eletrical'
// 3. giv
function rotate(str) {
    // To define the initial value to be a empty position
    var string = '';
    for ( var i = str.length-1 ; i>= 0; i--){
        string+= str[i];}
    return string;
}
rotate('electrical');
