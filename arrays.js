let ninjas = ['shaun', 'ryu','chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1] );


let age = [ 233,34,45,40];
console.log(age[3]);


let random = ['shaun', 'chun-li','crystal',90,798];
console.log(random);


// Join will join according to given sign
let result = ninjas.join('-');
// last index of will give last index number
let result = ninjas.lastIndexOf('chun-li');
// Concat will join a new string
let result = ninjas.concat('ken','crystal');
// push will add an array a new entity
let result = ninjas.push('ken');
// pop will remove last entity of an array
let result = ninjas.pop();
