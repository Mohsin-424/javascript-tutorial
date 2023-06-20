// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// Steps
// 1.We simply use new Date function and pass a format to get our desired date


const Alpha = new Date();
console.log(Alpha.getFullYear()+"/"+Alpha.getMonth()+"/"+Alpha.getDay());
console.log(Alpha.getFullYear()+"-"+Alpha.getMonth()+"-"+Alpha.getDay());
